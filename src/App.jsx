/*
[**실습 4] : 앞선 `state` 와 `setState` 예시에서 `count` 와 `button` 두 개 각각 컴포넌트 만들어보자**

- 아래의 코드에서 `count` 를 포함한 `<div>` 를 리액트 함수형 컴포넌트로 만들어라
- 아래의 코드에서 `<button>` 를 리액트 함수형 컴포넌트로 만들어라
    1. 증가 버튼과 감소 버튼 각각 다른 컴포넌트로 만들어라
    2. 단일 버튼 컴포넌트를 만들어서 각각 증가와 감소 버튼으로 활용해보아라
*/

import '@/App.css'
import { useState } from 'react'

function CountCompo({ count }) {
  // React 컴포넌트는 대문자로 시작해야 한다!
  return <div style={{ marginBottom: 10 }}>{count}</div>
}

function ButtonCompo({ onClick, children, className }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountCompo count={count} />
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        <ButtonCompo onClick={() => setCount((prev) => prev + 1)} className='up-button'>
          증가
        </ButtonCompo>
        <ButtonCompo onClick={() => setCount((prev) => prev - 1)} className='down-button'>
          감소
        </ButtonCompo>
      </div>
    </>
  )
}

export default App
