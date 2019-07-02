import React from 'react';
import styled from 'styled-components';

const RaceTrack = styled.div`
  width: 1000px;
  border-bottom: 3px dashed black;
`

const Race = () => (
  <RaceTrack>
    <h1>Car</h1>
  </RaceTrack>
);

export default Race;