import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 600px;
  height: 250px;
  padding: 35px;
  margin-top: 20px;
  font-size: 1.6em;
  background: white;
  border-radius: 10px;
  outline: none;
  font-weight: 500;
  letter-spacing: 0.1em;
`;

const CodeContainer = ({
  codeChallenge,
  charIndex,
  movePlayer,
  gameActive,
}) => {

  const handleKeyPress = (e) => {
    if (e.which === 32) e.preventDefault();
    const keyPressChar = String.fromCharCode(e.which);
    const currentLetter = document.querySelector('#currentLetter');
    currentLetter.style.backgroundColor = 'rgba(19, 35, 47, .9)';

    if (codeChallenge.substring(charIndex, charIndex + 5) === '<br/>' && e.which === 13) {
      movePlayer(5); // Enter
    } else if (codeChallenge.substring(charIndex, charIndex + 6) === '&nbsp;') {
      if (codeChallenge.substring(charIndex, charIndex + 12) !== '&nbsp;&nbsp;' && e.which === 32) {
        movePlayer(6); // Space
      }
    } else if (keyPressChar === codeChallenge[charIndex]) {
      movePlayer(1); // Correct char
    } else {
      currentLetter.style.backgroundColor = 'red';
    }
  };

  const handleTabPress = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault();
      if (codeChallenge.substring(charIndex, charIndex + 12) === '&nbsp;&nbsp;') movePlayer(12); // Tab
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
      id="codingBox"
      tabIndex={-1}
      onKeyPress={(e) => {
        if (gameActive) handleKeyPress(e);
      }}
      onKeyDown={(e) => {
        if (gameActive) handleTabPress(e);
      }}
    >
      <span id='correct' style={{ background: 'white', color: '#222' }} />
      <span id='currentLetter' style={{ background: 'rgba(19, 35, 47, .9)', color: 'white' }} />
      <span id='incomplete' style={{ background: 'white', color: '#222' }} />
    </Wrapper>
  );
};

export default CodeContainer;
