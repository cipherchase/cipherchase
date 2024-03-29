import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

`;

const RaceTrack = styled.div`
  width: 364px;
  border-top: 3px dashed black;
  position: relative;
  left: -54px;
`;

const PlayerLabel = styled.h4`
  margin: 10px;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const Race = ({
  playerName, position, shipColor, circleColor,
}) => {
  const SpaceShip = styled.i`
  margin-left: 54px;
  color: ${shipColor};
  position: relative;
  transform: rotate(46deg);
  z-index: 1;
  &:after{
    content: '';
    display: inline-block;
    width: 24px;
    height: 25px;
    background-color: ${circleColor};
    position: absolute;
    top: 3px;
    left: 36px;
    border-radius: 21px;
    z-index: -1;
    border: 1px solid black;
  }
`;

  return (
    <Wrapper>
      <SpaceShip style={{ left: `${position}px` }} className="fas fa-rocket fa-4x" />
      <RaceTrack />
      <PlayerLabel>{playerName}</PlayerLabel>
    </Wrapper>
  );
};

export default Race;
