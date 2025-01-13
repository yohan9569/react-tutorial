/*
[실습 10-3] 부모 컴포넌트에서 모든 useRef 를 갖고 일괄 제출 (forwardRef 버그)
*/

import { useState, useRef } from 'react'
import '@/App.css'

function FormWithValidation({ label, required = false, length = undefined }, reference) {
  const [requiredValid, setRequiredValid] = useState(true)
  const [lengthValid, setLengthValid] = useState(true)

  console.log(`${label} FWV - rerendered`)

  return (
    <>
      <div>
        {label}:{' '}
        <input
          ref={reference}
          type='text'
          onChange={(e) => {
            if (required) setRequiredValid(e.target.value.length !== 0)
            if (length) setLengthValid(e.target.value.length <= length)
          }}
        />
        {lengthValid || (
          <div style={{ color: 'red' }}>
            {label}길이 준수{length}
          </div>
        )}
        {requiredValid || <div style={{ color: 'red' }}>필수 항목</div>}
      </div>
    </>
  )
}

function App() {
  const references = {
    name: useRef(),
    desc: useRef(),
    mail: useRef(),
  }

  function submit() {
    console.log({
      name: references?.name?.current?.value,
      desc: references?.desc?.current?.value,
      mail: references?.mail?.current?.value,
    })
  }

  console.log('App - rerendered')
  return (
    <>
      <FormWithValidation ref={references.name} label='이름' required={true} length={10} />
      <FormWithValidation ref={references.desc} label='설명' length={20} />
      <FormWithValidation ref={references.mail} label='메일' required />{' '}
      {/* 값을 명시하지 않은 boolean props = true로 가정. 아예 언급 없으면 undefined*/}
      <button type='button'>제출</button>
    </>
  )
}

export default App
