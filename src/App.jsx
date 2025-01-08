/*
[실습 7] : Enter 키보드가 아닌 확인/취소 버튼을 통해 수정한 내용을 적용할지말지 선택 가능하도록
  Single Source of Truth 원칙 예 → 실습 6 에 이어서 desc 수정 확인 로직 추가
  확인 / 취소 버튼을 통해 실제 업데이트 되는 시점을 미루고 싶은 케이스 : 수정했다가 미적용 예
*/

import '@/App.css'
import { useState } from 'react'

function InputCompo({ originalValue, confirmEdit, cancelEdit }) {
  const [input, setInput] = useState(originalValue)
  // 이건 Single Source of Truth 원칙을 어긴 게 아닌가요???

  const doConfirm = () => {
    const isConfirm = confirm(`"${input}" 으로 변경하시겠습니까?`)
    if (isConfirm) confirmEdit(input) // 취소 누르면 계속 편집
  }

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.currentTarget.value)}></input>
      <button onClick={doConfirm}>수정</button>
      <button onClick={cancelEdit}>취소</button>
    </>
  )
}

function ListItem({ name, age, desc, setDesc }) {
  const [isEditing, setIsEditing] = useState(false)

  const confirmEdit = (confirmedValue) => {
    setDesc(confirmedValue)
    setIsEditing(false)
  }

  const cancelEdit = () => {
    setIsEditing(false)
  }

  return (
    <li style={{ textAlign: 'left' }}>
      {name} | {age} |{' '}
      {isEditing ? (
        <InputCompo originalValue={desc} confirmEdit={confirmEdit} cancelEdit={cancelEdit} />
      ) : (
        <span onClick={() => setIsEditing((prev) => !prev)}>{desc}</span>
      )}
    </li>
  )
}

function ListCompo({ tag: Tag, items, setItems }) {
  return (
    // ul / ol 선택 가능
    <Tag>
      {items.map(({ name, age, desc }, idx) => (
        <ListItem
          key={idx}
          name={name}
          age={age}
          desc={desc}
          setDesc={(input) => {
            const newItems = [...items]
            newItems[idx].desc = input
            setItems(newItems)
          }}
        />
      ))}
    </Tag>
  )
}

function App() {
  const [items, setItems] = useState([
    { name: 'Aaron', age: 10, desc: '안녕하세요' },
    { name: 'Baron', age: 30, desc: '반갑습니다' },
    { name: 'Caron', age: 22, desc: '처음뵙겠습니다' },
    { name: 'Daron', age: 17, desc: '보고싶었습니다' },
  ])

  return (
    <>
      <div>
        <ListCompo tag='ul' items={items} setItems={setItems} />
        <ListCompo tag='ol' items={items} setItems={setItems} />
      </div>
    </>
  )
}

export default App
