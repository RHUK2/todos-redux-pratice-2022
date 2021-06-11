import React, { useState } from 'react';
import styled from 'styled-components';

import TodoText from 'components/TodoText';

const TodoContentContainer = styled.div`
  padding: 2rem;
  border: 2px solid #dfe6e9;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.7rem;
`;

const NavItem = styled.li`
  width: 48%;
  font-weight: 700;
  text-align: center;
  padding: 1rem;
  cursor: pointer;
  border: 2px solid #dfe6e9;
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
    <TodoContentContainer>
      <NavList>
        <NavItem tabIndex={tabIndex} onClick={() => setTabIndex(0)}>
          Doing
        </NavItem>
        <NavItem tabIndex={tabIndex} onClick={() => setTabIndex(1)}>
          Finished
        </NavItem>
      </NavList>
      <TodoText tabIndex={tabIndex} />
    </TodoContentContainer>
  );
};

export default TodoContent;
