import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const RaceTrack = styled.div`
  width: 70rem;
  border-top: 3px dashed black;
  height: 3px;
`;

const PlayerLabel = styled.h4`
  margin-right: 10px;
`

const Race = () => (
  <Wrapper>
    <PlayerLabel>CPU</PlayerLabel>
    <i style={{ color: 'purple' }} className="fas fa-space-shuttle fa-4x" />
    <RaceTrack />
    <button>Move Car</button>
  </Wrapper>

);

export default Race;