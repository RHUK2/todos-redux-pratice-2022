import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actionTodo } from 'reducers/todoReducer';
import styled from 'styled-components';

const TopBox = styled.div``;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  padding: 20px 30px;
  background-color: #d6a2e8;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

const Form = styled.form`
  display: flex;
  padding: 20px 30px;
  border: 2px solid #dfe6e9;
  border-bottom: none;
`;

const InputText = styled.input`
  padding: 5px 10px;
  font-size: 20px;
  outline: none;
  flex-grow: 1;
`;

const AddBtn = styled.button`
  width: 50px;
  font-size: 20px;
  background-color: #a29bfe;
  border: none;
  box-shadow: inset 0px -3px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;

const TodoInput = ({ todo, addTodo }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    localStorage.setItem('TODO', JSON.stringify(todo));
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      return;
    }
    addTodo(text);
    setText('');
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <TopBox>
      <Title>Do it!</Title>
      <Form onSubmit={handleSubmit}>
        <InputText
          type="text"
          placeholder="You can do it!!"
          value={text}
          onChange={handleChange}
        />
        <AddBtn>
          <i class="fas fa-plus"></i>
        </AddBtn>
      </Form>
    </TopBox>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { todoReducer: todo } = state;
  return {
    todo,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (text) => dispatch(actionTodo.addTodo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
