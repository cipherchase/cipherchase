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
`;

const PlayerLabel = styled.h4`
  margin-left: 50px;
`

const Race = ({ playerName }) => (
  <Wrapper>
    <i style={{ color: 'purple' }} className="fas fa-space-shuttle fa-4x" />
    <RaceTrack />
    <PlayerLabel>{playerName}</PlayerLabel>
    <button>Move Car</button>
  </Wrapper>
);

export default Race;