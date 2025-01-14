/*
실습 17 : Props Drilling 이슈 해결을 위한 Context API 사용 : Create → Provider → Consumer
[17-2] Context 정의 및 Provider 영역 설정 후 Props Drilling은 해결 (리렌더 이슈)
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
  const count = useContext(countContext)
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

function ButtonComponent({ onClick }) {
  console.log('- B. Button Component')
  return (
    <div className='component-box' style={{ padding: 10 }}>
      Button Component
      <div>
        <button onClick={onClick}>증가</button>
      </div>
    </div>
  )
}

function NonContextComponent() {
  // Provider 밖의 컴포넌트라서, useContext 사용해도 default value.
  const count = useContext(countContext)
  console.log('- C. Non-Context Component')
  return (
    <div className='component-box' style={{ padding: 10 }}>
      Non-Context Component : {count}
    </div>
  )
}

// 컴포넌트 외부에서 생성
const defaultValue = -10
const countContext = createContext(defaultValue)

function App() {
  const [count, setCount] = useState(0)

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
      <countContext.Provider value={count}>
        <FC />
        <ButtonComponent onClick={() => setCount((prev) => prev + 1)} />
      </countContext.Provider>
      <NonContextComponent />
    </div>
  )
}

export default App
