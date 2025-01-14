/*
실습 13 : Ref 활용하여, 블로그에서 글 읽을때 어떤 제목의 글인지 상단 내비게이션 헤더에 제목 표기
[13-1] 블로그 포스트 페이지 내 컴포넌트 분리, Props 로 컴포넌트 재사용성 개선
*/

import { useState, useRef, forwardRef } from 'react'
import '@/App.css'
import { produce } from 'immer'

function Header() {
  return <div style={{ position: 'sticky', top: 0, height: 60, backgroundColor: 'white' }}></div>
}

function Title({ title }) {
  return <h3>{title}</h3>
}

function Content({ content }) {
  return <div>{content}</div>
}

function Post({ title, content }) {
  return (
    <>
      <Title title={title} />
      <Content content={content} />
    </>
  )
}

function App() {
  const post = {
    title: 'Lorem ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }

  return (
    <>
      <Header />
      <Post {...post} />
    </>
  )
}

export default App
