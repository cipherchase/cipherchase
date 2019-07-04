import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const RaceTrack = styled.div`
  width: 855px;
  border-top: 3px dashed black;
  position: relative;
  left: -55px;
`;

const PlayerLabel = styled.h4`
  margin-left: 10px;
`;

const SpaceShip = styled.i`
  margin-left: 55px;
  color: #1ab188;
  position: relative;
  transform: rotate(46deg);
  z-index: 2;
  &:after{
    content: '';
    display: inline-block;
    width: 24px;
    height: 25px;
    background-color: #1ab188;
    position: absolute;
    top: 3px;
    left: 36px;
    border-radius: 21px;
  }
`;

const Race = ({ playerName, position }) => (
  <Wrapper>
    <SpaceShip style={{ left: `${position}px` }} className="fas fa-rocket fa-4x" />
    <RaceTrack />
    <PlayerLabel>{playerName}</PlayerLabel>
  </Wrapper>
);


export default Race;
