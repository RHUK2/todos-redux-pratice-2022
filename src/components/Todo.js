import React from 'react';
import styled from 'styled-components';

import TodoInput from 'components/TodoInput';
import TodoContent from 'components/TodoContent';

const TodoContainer = styled.div`
  width: 500px;
`;

const Todo = () => (
  <TodoContainer>
    <TodoInput />
    <TodoContent />
  </TodoContainer>
);

export default Todo;
