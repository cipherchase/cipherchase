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

const Race = () => (
  <Wrapper>
    <i style={{ color: 'purple' }} className="fas fa-space-shuttle fa-4x" />
    <RaceTrack />
  </Wrapper>

);

export default Race;