import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const RaceTrack = styled.div`
  width: 800px;
  border-top: 3px dashed black;
  position: relative;
  left: 0;
`;

const PlayerLabel = styled.h4`
  margin-left: 50px;
`;

const SpaceShip = styled.i`
  color: purple;
  position: relative;
`;
const Race = ({ playerName }) => {
  return (
    <Wrapper>
      <SpaceShip id={playerName} className="fas fa-space-shuttle fa-4x" />
      <RaceTrack />
      <PlayerLabel>{playerName}</PlayerLabel>
      <button onClick={() => {
        const ship = document.querySelector(`#${playerName}`);
        ship.style.left = "100px";
      }}>Move Car</button>
    </Wrapper >
  )
};

export default Race;