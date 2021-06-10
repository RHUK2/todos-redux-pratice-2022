import React, { useState } from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';

const TopBox = styled.div`
  padding: 20px 30px;
  border: 2px solid #dfe6e9;
  height: 500px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

const NavList = styled.ul`
  display: flex;
  margin-bottom: 20px;
`;

const NavItem = styled.li`
  font-weight: 700;
  text-align: center;
  padding: 10px;
  flex-grow: 1;
  cursor: pointer;
  border: 2px solid #dfe6e9;
  :not(:last-child) {
    margin-right: 10px;
  }
  :hover {
    opacity: 0.9;
  }
  :nth-child(${({ tabIndex }) => tabIndex + 1}) {
    background-color: #d6a2e8;
  }
`;

const TodoContent = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <TopBox>
      <NavList>
        <NavItem tabIndex={tabIndex} onClick={() => setTabIndex(0)}>
          Doing
        </NavItem>
        <NavItem tabIndex={tabIndex} onClick={() => setTabIndex(1)}>
          Finished
        </NavItem>
      </NavList>
      <TodoItem tabIndex={tabIndex} />
    </TopBox>
  );
};

export default TodoContent;
