import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }
  // text : todo 내용. / checked : 체크박스 상태. / id : todo의 고유 아이디.
  // onToggle : 체크박스 키고 끄는 함수. / onRemove : 아이템을 삭제시키는 함수.

  render() {
    const { text, checked, id, color, onToggle, onRemove } = this.props;

    console.log(id);

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>

        <div className="remove"  onClick={e => {
            e.stopPropagation();
            onRemove(id);
          }}>&times;</div>
        
        <div style={{ color }} className={`todo-text ${ checked ? 'checked': ''}`}>
          <div>{text}</div>
        </div>
        {
          checked && <div className="check-mark">&#x2713;</div>
        }

      </div>
    );
  }
}
export default TodoItem;
