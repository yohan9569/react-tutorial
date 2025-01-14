/*
실습 17 : Props Drilling 이슈 해결을 위한 Context API 사용 : Create → Provider → Consumer
[17-3] App 최상단 부모 컴포넌트 내 State 를 Provider 컴포넌트로 이관
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
  // useContext 사용 시, 상태 바뀌면 자식 컴포넌트도 리렌더됨.
  const { count } = useContext(countContext)
  console.log('- A.3. Third Component')
  return (
    <div className='component-box' style={{ padding: 10 }}>
      Third Component : {count}
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
  const { setCount } = useContext(countContext)
  console.log('- B. Button Component')
  return (
    <div className='component-box' style={{ padding: 10 }}>
      Button Component
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
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
