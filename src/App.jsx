/*
실습 16 : useState 대신 useReduce 활용하여 State 상태변경 방법 제약두기 및 복잡한 전이 중앙화
[16-3]  useReducer 공식 명칭 사용 : reducer, previousState, action
*/

import { useState, useReducer } from 'react'
import '@/App.css'

// /** 치고 엔터: VSCode 에서 함수 위에 /** 작성 후 엔터를 치면 자동완성으로 위와 같이 JSDoc 이 작성된다
/**
 *
 * @param {*} prevState
 * @param {*} action
 * @returns
 */
function reducer(prevState, action) {
  switch (action?.type) {
    case 'INCREASE10':
      return prevState + 10
    case 'DECREASE10':
      return prevState - 10
    default:
      throw new Error('없어용')
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0)

  console.log('rendered')
  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: 'INCREASE10' })}>증가</button>
      <button onClick={() => dispatch({ type: 'DECREASE10' })}>감소</button>
    </>
  )
}

export default App
