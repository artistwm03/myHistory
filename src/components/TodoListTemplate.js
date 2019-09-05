import React from 'react';
import './TodoListTemplate.css';

// ** TodoListTemplate을 함수형 컴포넌트로 만듬 , 함수형컴포넌트 구조 ->  const AAA = () =>{ };

// ** 파라미터로 받은게 props,
// ** 파라미터를(=props를) 비구조화 할당하여 원래 (props) => { . . . } 를해야하는 것을
// ** ({ form, children, palette }) => { . . . } 형태로 작성한 것.

// TodoListTemplate 은 3가지의 props 를 받는 상태 ( form, children, palette )

const TodoListTemplate = ({ form, children, palette }) => {
  return (
    <main className="todo-list-template">
      <div className="title">오늘 할 일</div>

      <section className="palette-wrapper">{palette}</section>

      <section className="form-wrapper">{form}</section>

      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default TodoListTemplate;
