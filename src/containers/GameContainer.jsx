import React from 'react';
import Race from '../components/Race';
import styled from 'styled-components';

const Races = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const GameContainer = () => (
  <div>
    <Races>
      <Race />
      <Race />
    </Races>
  </div>
);

export default GameContainer;
