/*
실습 13 : Ref 활용하여, 블로그에서 글 읽을때 어떤 제목의 글인지 상단 내비게이션 헤더에 제목 표기
[13-2] 헤더 내 텍스트 추가
*/

import { useState, useRef, forwardRef } from 'react'
import '@/App.css'
import { produce } from 'immer'

function Header({ title }) {
  return (
    <div
      style={{ position: 'sticky', top: 0, height: 60, backgroundColor: 'white', color: 'black' }}
    >
      {title}
    </div>
  )
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
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
      Excepteur sint occaecat cupidatat non proident, \
      sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, \
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n\
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n\
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim',
  }

  return (
    <>
      <Header title={post.title} />
      <Post {...post} />
    </>
  )
}

export default App
