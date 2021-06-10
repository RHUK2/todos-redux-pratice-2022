import React from 'react';
import { connect } from 'react-redux';
import { actionTodo } from 'reducers/todoReducer';
import styled from 'styled-components';

const TopBox = styled.div``;
const TodoList = styled.ul`
  height: 380px;
  overflow-y: scroll;
`;
const TodoListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;
const Text = styled.span`
  overflow-wrap: break-word;
  flex-grow: 1;
  max-width: 300px;
  line-height: 1.5;
`;
const BtnBox = styled.div`
  font-size: 20px;
  display: flex;
  width: 80px;
  justify-content: space-between;
`;
const CompleteBtn = styled.span`
  color: #4cd137;
  cursor: pointer;
  ${({ tabIndex }) => tabIndex === 1 && `visibility: hidden`};
`;
const EditBtn = styled.span`
  color: #00a8ff;
  cursor: pointer;
  ${({ tabIndex }) => tabIndex === 1 && `visibility: hidden`};
`;
const DeleteBtn = styled.span`
  color: #e84118;
  cursor: pointer;
`;

const TodoItem = ({ tabIndex, todo, deleteTodo, completeTodo }) => {
  const handleClick = (e) => {};

  return (
    <TopBox>
      <TodoList>
        {tabIndex === 0
          ? todo
              .filter((work) => work.finished === false)
              .map((work) => (
                <TodoListItem key={work.id}>
                  <Text>{work.text}</Text>
                  <BtnBox>
                    <CompleteBtn onClick={() => completeTodo(work.id)}>
                      <i class="fas fa-check"></i>
                    </CompleteBtn>
                    <EditBtn onClick={handleClick}>
                      <i class="fas fa-edit"></i>
                    </EditBtn>
                    <DeleteBtn onClick={() => deleteTodo(work.id)}>
                      <i class="fas fa-trash"></i>
                    </DeleteBtn>
                  </BtnBox>
                </TodoListItem>
              ))
              .reverse()
          : todo
              .filter((work) => work.finished === true)
              .map((work) => (
                <TodoListItem key={work.id}>
                  <Text>{work.text}</Text>
                  <BtnBox>
                    <CompleteBtn
                      tabIndex={tabIndex}
                      onClick={() => completeTodo(work.id)}
                    >
                      <i class="fas fa-check"></i>
                    </CompleteBtn>
                    <EditBtn tabIndex={tabIndex}>
                      <i class="fas fa-edit"></i>
                    </EditBtn>
                    <DeleteBtn onClick={() => deleteTodo(work.id)}>
                      <i class="fas fa-trash"></i>
                    </DeleteBtn>
                  </BtnBox>
                </TodoListItem>
              ))
              .reverse()}
      </TodoList>
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
    deleteTodo: (id) => dispatch(actionTodo.deleteTodo(id)),
    completeTodo: (id) => dispatch(actionTodo.completeTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
