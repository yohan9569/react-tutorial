/*
실습 12 : Ref 와 State 를 조합하여, 유효성 검증에 따른 포커스까지 도입하여 회원가입 페이지 만들기
[12-5] immer: 객체 상태 내 프로퍼티 단위 불변성 보장으로 리렌더 이슈 수정
npm install immer --save: immer package.json dependencies 자동 추가, -lock도 반영.
*/

import { useState, useRef, forwardRef } from 'react'
import '@/App.css'
import { produce } from 'immer'

function IdInput() {
  return (
    <div>
      ID: <input />
    </div>
  )
}

function PwInput({ setChecked }) {
  const [valid, setValid] = useState({
    required: false,
    min: false,
    max: true,
  })
  const reference = useRef() //순서에 대한 공식 규칙은 없지만, useState → useRef → 기타 훅의 순서를 많이 따릅니다.

  function changType(e) {
    if (reference.current.type === 'password') {
      reference.current.type = 'text'
      e.target.value = '감추기'
    } else {
      reference.current.type = 'password'
      e.target.value = '보이기'
    }
  }

  console.log('PW- rerendered')

  return (
    <div>
      PW:{' '}
      <input
        type='password'
        ref={reference}
        onChange={(e) => {
          const length = e.target.value.length
          const changed = produce(valid, (draft) => {
            draft.required = length !== 0
            draft.min = length > 8
            draft.max = length < 20
          })
          setValid(changed)
          setChecked(changed.required && changed.min && changed.max)
        }}
      />
      <button onClick={changType}>보이기</button>
      {valid.required || <div style={{ color: 'red' }}>필수 항목</div>}
      {valid.min || <div style={{ color: 'red' }}>최소 8 글자</div>}
      {valid.max || <div style={{ color: 'red' }}>최대 20 글자</div>}
    </div>
  )
}

function App() {
  const [checked, setChecked] = useState(false)
  console.log('APP- rerendered')
  function registration() {}

  return (
    <>
      <IdInput />
      <PwInput setChecked={setChecked} />
      {checked && <button onClick={registration}>회원가입</button>}
    </>
  )
}

export default App
