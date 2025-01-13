/*
[실습 10-2] useRef 통한 <input> 의 React Component 화
*/

import { useState, useRef } from 'react'
import '@/App.css'

function FormWithValidation({ label, required = false, length = undefined }) {
  const reference = useRef()

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
  console.log('App - rerendered')
  return (
    <>
      <FormWithValidation label='이름' required={true} length={10} />
      <FormWithValidation label='설명' />
      <FormWithValidation label='메일' required />
      <button type='button'>제출</button>
    </>
  )
}

export default App
