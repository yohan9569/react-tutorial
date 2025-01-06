import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import '@/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <React.Fragment></React.Fragment> == <Fragment></Fragment> == <></>
    // jsx는 무조건 하나의 태그만 있어야 해. 그래서 최상단 껍데기 둠.
    // jsx 내부에서 js 문법 -> 무조건 {} 중괄호.
    <>
      <div>{count}</div>
      <button onClick={(e) => setCount(count + 1)}>증가</button>
      <button onClick={(e) => setCount(count - 1)}>감소</button>
    </>
  )
}

export default App
