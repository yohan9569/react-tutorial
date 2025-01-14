/*
실습 16 : useState 대신 useReduce 활용하여 State 상태변경 방법 제약두기 및 복잡한 전이 중앙화
[16-1] useState 사용 시 상태 변경 경우의 수 무제한 이슈
*/

import { useState } from 'react'
import '@/App.css'

function App() {
  const [count, setCount] = useState(0)

  // 상태 변경 경우의 수 2개 : 10 증가, 10 감소 => 만약에 count 를 무조건 10씩 증가 혹은 감소만하고싶다면?
  //  - 문제점 : setCount 는 넣는값마다 다 변경할 수 있다는 "자율성"
  //  - 내가 원하는것 : count 상태 변경에 제약을 두가지 경우의 수로만
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 10)}>증가</button>
      <button onClick={() => setCount((prev) => prev - 10)}>감소</button>
    </>
  )
}

export default App
