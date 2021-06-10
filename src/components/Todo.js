import React from 'react';
import styled from 'styled-components';

import TodoInput from 'components/TodoInput';
import TodoContent from 'components/TodoContent';

const TopBox = styled.div`
  width: 500px;
`;

const Todo = () => (
  <TopBox>
    <TodoInput />
    <TodoContent />
  </TopBox>
);

export default Todo;
