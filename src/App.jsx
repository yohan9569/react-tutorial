/*
실습 17 : Props Drilling 이슈 해결을 위한 Context API 사용 : Create → Provider → Consumer
[17-4] 불필요한 컴포넌트 단위의 리렌더 방지를 위한 Consumer 사용
*/

import { useState, createContext, useContext } from 'react'
import '@/App.css'

function LC() {
  console.log('- A.4. Fourth Component')
  return (
    <div className='component-box' style={{ padding: 10 }}>
      Fourth Component
    </div>
  )
}

function TC() {
  // Consumer 사용 시, 자식 컴포넌트 리렌더 안 됨. + 본인도 안 됨.
  // const { count } = useContext(countContext)
  console.log('- A.3. Third Component')
  return (
    <div className='component-box' style={{ padding: 10 }}>
      Third Component :<countContext.Consumer>{({ count }) => <>{count}</>}</countContext.Consumer>
      <LC />
    </div>
  )
}

function SC() {
  console.log('- A.2. Second Component')
  return (
    <div className='component-box' style={{ padding: 10 }}>
      Second Component
      <TC />
    </div>
  )
}

function FC() {
  console.log('- A.1. First Component')
  return (
    <div className='component-box' style={{ padding: 10 }}>
      First Component
      <SC />
    </div>
  )
}

function ButtonComponent() {
  // const { setCount } = useContext(countContext)
  console.log('- B. Button Component')
  return (
    <div className='component-box' style={{ padding: 10 }}>
      Button Component
      <div>
        <countContext.Consumer>
          {({ setCount }) => <button onClick={() => setCount((prev) => prev + 1)}>증가</button>}
        </countContext.Consumer>
      </div>
    </div>
  )
}

function NonContextComponent() {
  // Provider 밖의 컴포넌트라서, useContext 사용해도 default value.
  const { count } = useContext(countContext)
  console.log('- C. Non-Context Component')
  return (
    <div className='component-box' style={{ padding: 10 }}>
      Non-Context Component : {count}
    </div>
  )
}

// 컴포넌트 외부에서 생성
const defaultValue = -10
const countContext = createContext({ count: defaultValue, setCount: (state) => {} })

// Provider 설정을 위한 컴포넌트
function ContextProvider({ children }) {
  const [count, setCount] = useState(0)

  console.log('- A.0. ContextProvider Component')

  return (
    <>
      <countContext.Provider value={{ count, setCount }}>{children}</countContext.Provider>
    </>
  )
}

function App() {
  return (
    <div
      className='section-box'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        padding: 10,
      }}
    >
      <ContextProvider>
        <FC />
        <ButtonComponent />
      </ContextProvider>
      <NonContextComponent />
    </div>
  )
}

export default App
