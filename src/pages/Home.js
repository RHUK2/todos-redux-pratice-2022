import React from 'react';
import styled from 'styled-components';

import Todo from 'components/Todo';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Todo />
    </HomeContainer>
  );
};

export default Home;
