import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const RaceTrack = styled.div`
  width: 875px;
  border-top: 3px dashed black;
  position: relative;
  left: -75px;
`;

const PlayerLabel = styled.h4`
  margin-left: 10px;
`;

const SpaceShip = styled.i`
  margin-left: 75px;
  color: purple;
  position: relative;
  z-index: 2
`;

const Race = ({ playerName }) => {
  let position = 0;
  // will need to change depending on the length of the problem
  const increment = 50;
  return (
    <Wrapper>
      <SpaceShip id={playerName} className="fas fa-shipping-fast fa-4x" />
      <RaceTrack />
      <PlayerLabel>{playerName}</PlayerLabel>
      <button onClick={() => {
        if (position <= 800 - increment) {
          const ship = document.querySelector(`#${playerName}`);
          position += increment;
          ship.style.left = `${position}px`;
        }
      }}>Move</button>
    </Wrapper>
  );
};

export default Race;
