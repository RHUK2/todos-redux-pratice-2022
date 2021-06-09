import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCount } from 'reducers/countReducer';
import { actionTodo } from 'reducers/todoReducer';
import styled from 'styled-components';

const TopBox = styled.div``;

const Home = ({ todo, addTodo, count, increaseCount, decreaseCount }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    addTodo(text);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <TopBox>
      <h1>할 일</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="..."
          value={text}
          onChange={handleChange}
        />
        <button>추가</button>
        <button onClick={increaseCount}>+</button>
        <span>{count}</span>
        <button onClick={decreaseCount}>-</button>
      </form>
      <ul>
        {todo.map((work) => (
          <li key={work.id}>{work.text}</li>
        ))}
      </ul>
    </TopBox>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { todoReducer: todo, countReducer: count } = state;
  return {
    todo,
    count,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (text) => dispatch(actionTodo.addTodo(text)),
    increaseCount: () => dispatch(actionCount.increaseCount()),
    decreaseCount: () => dispatch(actionCount.decreaseCount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
