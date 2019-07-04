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
  z-index: 2;
`;

const Race = ({ playerName, position }) => (
    <Wrapper>
      <SpaceShip style={{ left: `${position}px` }} className="fas fa-rocket fa-4x" />
      <RaceTrack />
      <PlayerLabel>{playerName}</PlayerLabel>
    </Wrapper>
);


export default Race;
