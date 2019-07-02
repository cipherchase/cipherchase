import React from 'react';
import Race from '../components/Race';
import styled from 'styled-components';

const Races = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 1000px;
  border: 1px solid black;
`;

const GameContainer = () => (
  <div>
    <Races>
      <Race playerName="CPU" />
      <Race playerName="P1" />
    </Races>
  </div>
);

export default GameContainer;
