import React from 'react';
import Race from '../components/Race';
import styled from 'styled-components';

const Races = styled.div`
  border: 1px solid red;
  width: 90%;
  align-items: center;
  display: flex;
  flex-direction: column;
`

const GameContainer = () => (
  <div>
    <Races>
      <Race />
      <Race />
    </Races>
  </div>
);

export default GameContainer;
