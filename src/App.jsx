/*
실습 11 : 렌더링 없이도 ref 를 통해 DOM 조작이 가능하다는것을 직접 코드를 통해 이해해보자
[실습 11-3] useRef 통한 <video> 태그 DOM(HTML 요소) 영상 소스 변경
*/

import { useState, useRef, forwardRef } from 'react'
import '@/App.css'

function App() {
  const sourceRef = useRef()

  const sources = [
    'https://vjs.zencdn.net/v/oceans.mp4',
    'https://lamberta.github.io/html5-animation/examples/ch04/assets/movieclip.mp4',
  ]
  console.log('- rerendered')

  return (
    <>
      <video autoPlay controls width={500} ref={sourceRef} />
      <div>
        <button onClick={() => (sourceRef.current.src = sources[0])}>전환 1</button>
        <button onClick={() => (sourceRef.current.src = sources[1])}>전환 2</button>
      </div>
    </>
  )
}

export default App
