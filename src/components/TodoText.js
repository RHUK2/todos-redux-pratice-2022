import React, { useEffect, useRef, useState } from 'react';
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

const Form = styled.form`
  width: 70%;
`;

const InputText = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  font-size: 1rem;
  padding-bottom: 5px;
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
const AllClearBtn = styled.button`
  margin-top: 20px;
  border: none;
  background-color: #e84118;
  color: white;
  border-radius: 1rem;
  padding: 0.3rem 1rem;
  :hover {
    opacity: 0.9;
  }
`;

const TodoText = ({
  tabIndex,
  todo,
  deleteTodo,
  completeTodo,
  pendingTodo,
  updateTodo,
  pendingClearTodo,
  completeClearTodo,
}) => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    setIsToggle(false);
    setCurrentIndex(null);
  }, [todo]);

  const handleSubmit = (e, id) => {
    e.preventDefault();
    if (text === '') {
      return;
    }
    updateTodo(id, text);
  };

  const handleChange = (e) => {
    setText(e.currentTarget.value);
  };

  const handleToggle = (index, workText) => {
    setIsToggle(!isToggle);
    setCurrentIndex(index);
    setText(workText);
  };

  const handleClick = () => {
    if (tabIndex === 0) {
      pendingClearTodo();
    } else {
      completeClearTodo();
    }
  };

  return (
    <TodoTextContainer>
      <TodoList>
        {tabIndex === 0
          ? todo
              .filter((work) => work.finished === false)
              .map((work, index) => (
                <TodoItem key={work.id}>
                  {currentIndex === index && isToggle ? (
                    <Form onSubmit={(event) => handleSubmit(event, work.id)}>
                      <InputText
                        type="text"
                        value={text}
                        onChange={handleChange}
                      />
                    </Form>
                  ) : (
                    <Text>{work.text}</Text>
                  )}
                  <BtnBox>
                    <CompleteBtn onClick={() => completeTodo(work.id)}>
                      <i className="fas fa-check"></i>
                    </CompleteBtn>
                    <EditBtn onClick={() => handleToggle(index, work.text)}>
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
      <AllClearBtn onClick={handleClick}>Clear</AllClearBtn>
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
    updateTodo: (id, text) => dispatch(actionTodo.updateTodo(id, text)),
    pendingClearTodo: () => dispatch(actionTodo.pendingClearTodo()),
    completeClearTodo: () => dispatch(actionTodo.completeClearTodo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoText);
