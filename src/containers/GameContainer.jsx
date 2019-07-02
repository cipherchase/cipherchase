import React from 'react';
import Race from '../components/Race';
import styled from 'styled-components';

const Races = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 1050px;
  border: 1px solid black;
  margin: 100px;
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
