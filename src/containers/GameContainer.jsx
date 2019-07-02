import React from 'react';
import styled from 'styled-components';
import Race from '../components/Race.jsx';

const Races = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 1100px;
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
