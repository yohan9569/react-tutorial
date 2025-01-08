/*
[실습 6] : 아이템 리스트를 통해 부모-자식 컴포넌트 분리하기
  1. 리스트-아이템 → 부모-자식 컴포넌트로 분리 : Props 객체 내 children 프로퍼티 활용
  2. 최상위 부모에서 리스트에 아이템 전달
  3. 사람 객체 아이템 정보를 리스트 아이템의 Props 로 전달
  4. 수정 가능한 아이템 - 활성화 상태에 따른 <input/> 폼 등장 및 이벤트 버블링 버그
  5. 최상위 부모에서 리스트에 아이템 SetState 전달
  **주의: Single Source of Truth 원칙**
*/

import '@/App.css'
import { useState } from 'react'

function ListItem({ name, age, desc, setDesc }) {
  const [isEditing, setIsEditing] = useState(false)
  return (
    <li style={{ textAlign: 'left' }}>
      {name} | {age} |{' '}
      {isEditing ? (
        <input
          value={desc}
          onChange={(e) => setDesc(e.currentTarget.value)}
          onKeyDown={(e) => e.key === 'Enter' && setIsEditing((prev) => !prev)}
        ></input>
      ) : (
        <span onClick={() => setIsEditing((prev) => !prev)}>{desc}</span>
      )}
    </li>
  )
}

function ListCompo({ tag: Tag, items, setItems }) {
  return (
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
