import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionTodo } from 'reducers/todoReducer';
import styled from 'styled-components';

const TodoTextContainer = styled.div``;

const TodoList = styled.ul`
  height: 30vh;
  overflow-y: auto;
`;
const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.2rem;
  border: 1px solid black;
  padding: 1rem 1.2rem;
  :not(:last-child) {
    margin-bottom: 1rem;
  }
`;
const Text = styled.span`
  width: 70%;
  word-break: break-all;
  line-height: 1.5;
`;
const BtnBox = styled.div`
  white-space: pre-wrap;
  width: ${({ width }) => (width ? '13%' : '22%')};
  display: flex;
  justify-content: space-between;
`;

const BtnIcon = styled.span`
  font-size: 1.2rem;
  cursor: pointer;
`;

const CompleteBtn = styled(BtnIcon)`
  color: #4cd137;
`;
const EditBtn = styled(BtnIcon)`
  color: #00a8ff;
`;
const DeleteBtn = styled(BtnIcon)`
  color: #e84118;
`;
const PendingBtn = styled(BtnIcon)`
  color: black;
`;

const Form = styled.form``;

const InputText = styled.input``;

const TodoText = ({
  tabIndex,
  todo,
  deleteTodo,
  completeTodo,
  pendingTodo,
}) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      return;
    }
    // addTodo(text);
    setText('');
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <TodoTextContainer>
      <TodoList>
        {tabIndex === 0
          ? todo
              .filter((work) => work.finished === false)
              .map((work, index) => (
                <TodoItem key={work.id}>
                  <Text>{work.text}</Text>
                  {/* <Form onSubmit={handleSubmit}>
                    <InputText
                      type="text"
                      value={work.text}
                      onChange={handleChange}
                    />
                  </Form> */}
                  <BtnBox>
                    <CompleteBtn onClick={() => completeTodo(work.id)}>
                      <i className="fas fa-check"></i>
                    </CompleteBtn>
                    <EditBtn>
                      <i className="fas fa-edit"></i>
                    </EditBtn>
                    <DeleteBtn onClick={() => deleteTodo(work.id)}>
                      <i className="fas fa-trash"></i>
                    </DeleteBtn>
                  </BtnBox>
                </TodoItem>
              ))
              .reverse()
          : todo
              .filter((work) => work.finished === true)
              .map((work) => (
                <TodoItem key={work.id}>
                  <Text>{work.text}</Text>
                  <BtnBox width="true">
                    <PendingBtn onClick={() => pendingTodo(work.id)}>
                      <i className="fas fa-redo"></i>
                    </PendingBtn>
                    <DeleteBtn onClick={() => deleteTodo(work.id)}>
                      <i className="fas fa-trash"></i>
                    </DeleteBtn>
                  </BtnBox>
                </TodoItem>
              ))
              .reverse()}
      </TodoList>
    </TodoTextContainer>
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
    deleteTodo: (id) => dispatch(actionTodo.deleteTodo(id)),
    completeTodo: (id) => dispatch(actionTodo.completeTodo(id)),
    pendingTodo: (id) => dispatch(actionTodo.pendingTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoText);
