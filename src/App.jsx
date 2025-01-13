/*
실습 11 : 렌더링 없이도 ref 를 통해 DOM 조작이 가능하다는것을 직접 코드를 통해 이해해보자
[11-1] useRef 통해 원하는 DOM(HTML 요소)과 연결
*/

import { useState, useRef, forwardRef } from 'react'
import '@/App.css'

function App() {
  const appleRef = useRef()
  console.log('- rerendered')

  return (
    <>
      <div ref={appleRef}>apple</div>
      <button
        onClick={() =>
          (appleRef.current.style.color =
            appleRef.current.style.color === 'black' ? 'red' : 'black')
        }
      >
        변경
      </button>
    </>
  )
}

export default App
