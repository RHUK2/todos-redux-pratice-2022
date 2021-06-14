import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actionTodo } from 'reducers/todoReducer';
import styled from 'styled-components';

const TodoInputContainer = styled.div``;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  padding: 1.5rem 2rem;
  background-color: #d6a2e8;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

const Form = styled.form`
  display: flex;
  padding: 1.5rem 2rem;
  border: 2px solid #dfe6e9;
  border-bottom: none;
`;

const InputText = styled.input.attrs((props) => {
  return {
    type: 'text',
  };
})`
  flex-grow: 1;
  padding: 0.7rem;
  font-size: 1.2rem;
  outline: none;
`;

const AddBtn = styled.button`
  width: 3rem;
  font-size: 1.2rem;
  background-color: #a29bfe;
  border: none;
  box-shadow: inset 0px -3px rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  margin-left: 1rem;
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
    <TodoInputContainer>
      <Title>
        Do it!{` (${todo.filter((elem) => elem.finished === false).length})`}
      </Title>
      <Form onSubmit={handleSubmit}>
        <InputText
          type
          placeholder="You can do it!!"
          value={text}
          onChange={handleChange}
        />
        <AddBtn>
          <i className="fas fa-plus"></i>
        </AddBtn>
      </Form>
    </TodoInputContainer>
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
