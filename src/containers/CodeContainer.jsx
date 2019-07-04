import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid black;
  width: 1150px;
  height: 250px;
  margin: 10px;
  padding: 10px;
  font-size: 30px;
`;

const CodeContainer = ({
  codeChallenge,
  charIndex,
  moveChar,
  gameActive,
}) => {

  const handleKeyPress = (e) => {
    if (e.which === 32) e.preventDefault();
    const keyPressChar = String.fromCharCode(e.which);
    const currentLetter = document.querySelector('#currentLetter');
    currentLetter.style.backgroundColor = 'yellow';

    if (codeChallenge.substring(charIndex, charIndex + 5) === '<br/>' && e.which === 13) moveChar(5); // Enter
    else if (codeChallenge.substring(charIndex, charIndex + 6) === '&nbsp;' && e.which === 32) moveChar(6); // Space
    else if (keyPressChar === codeChallenge[charIndex]) moveChar(1); // Correct char
    else currentLetter.style.backgroundColor = 'red';
  };

  const handleTabPress = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault();
      if (codeChallenge.substring(charIndex, charIndex + 12) === '&nbsp;&nbsp;') moveChar(12); // Tab
    }
  };

  useEffect(() => {
    const correct = document.querySelector('#correct');
    const currentLetter = document.querySelector('#currentLetter');
    const incomplete = document.querySelector('#incomplete');
    correct.innerHTML = codeChallenge.substring(0, charIndex);

    if (codeChallenge.substring(charIndex, charIndex + 5) === '<br/>') {
      currentLetter.innerHTML = ' ';
      incomplete.innerHTML = codeChallenge.substring(charIndex);
    } else if (codeChallenge.substring(charIndex, charIndex + 12) === '&nbsp;&nbsp;') {
      currentLetter.innerHTML = '&nbsp;&nbsp;';
      incomplete.innerHTML = codeChallenge.substring(charIndex + 12);
    } else if (codeChallenge.substring(charIndex, charIndex + 6) === '&nbsp;') {
      currentLetter.innerHTML = '&nbsp;';
      incomplete.innerHTML = codeChallenge.substring(charIndex + 6);
    } else {
      currentLetter.innerHTML = codeChallenge.substring(charIndex, charIndex + 1);
      incomplete.innerHTML = codeChallenge.substring(charIndex + 1);
    }
  });

  return (
    <Wrapper
      tabIndex={-1}
      onKeyPress={(e) => {
        if (gameActive) handleKeyPress(e);
      }}
      onKeyDown={(e) => {
        if (gameActive) handleTabPress(e);
      }}
    >
      <span id='correct' style={{ color: 'white', backgroundColor: 'green' }} />
      <span id='currentLetter' style={{ backgroundColor: 'yellow' }} />
      <span id='incomplete' style={{ color: '#222' }} />
    </Wrapper>
  );
};

export default CodeContainer;
