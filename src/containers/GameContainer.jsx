import React from 'react';
import styled from 'styled-components';
import Race from '../components/Race.jsx';
import CodeContainer from './CodeContainer.jsx';

const Races = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 1150px;
  border: 1px solid black;
`;

const GameContainer = () => (
  <div>
    <Races>
      <Race playerName="CPU" />
      <Race playerName="P1" />
    </Races>
    <CodeContainer />
  </div>
);

export default GameContainer;
