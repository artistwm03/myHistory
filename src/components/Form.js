import React from 'react';
import './Form.css';

// 컴포넌트 기능을 구현하기전 , 모양을 먼저 잡아주기 
      // input, 추가버튼 2개의 태그를 div 태그로 감싸줘야 됨. 문법이 그래. 

// Form 컴포넌트는 총 4가지의 props 를 받아온다. 누가 전달해주는거지? 어디서? App.js render에서 전해주는거 아닌가?
// value      : 인풋 내용,
// onChange   : 인풋 내용이 변경 될 때 실행되는 함수,
// onKeyPress : 인풋에서 키를 입력 할 때 실행되는 함수, 이 함수는 나중에 Enter가 눌렸을때 onCreate 한것과 동일한 작업을 하기 위해서 사용.
// onCreate   : 버튼이 클릭 될 때 실행 될 함수.

const Form = ({ value, onChange, onCreate, onKeyPress, color }) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{ color }} />
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;
