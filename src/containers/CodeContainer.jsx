import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions/actionCreators';

const mapStateToProps = store => (
  {
    codeChallenge: store.games.codeChallenge,
    charIndex: store.games.charIndex,
  }
);

const mapDispatchToProps = dispatch => (
  {
    moveCar: () => dispatch(actions.moveCar()),
  }
);

const CodeContainer = ({ codeChallenge, charIndex, moveCar }) => {

  useEffect(() => {
    const correct = document.querySelector('#correct');
    const currentLetter = document.querySelector('#currentLetter');
    const incomplete = document.querySelector('#incomplete');
    correct.innerHTML = codeChallenge.substring(0, charIndex);
    currentLetter.innerHTML = codeChallenge.substring(charIndex, charIndex + 1);
    incomplete.innerHTML = codeChallenge.substring(charIndex + 1);
  });

  return (
    <div
      style={{ border: '1px solid black', width: '500px', height: '500px' }}
      tabIndex="0"
      onKeyPress={(e) => {
        const keyPressCode = String.fromCharCode(e.which);
        const currentLetter = document.querySelector('#currentLetter');
        if (keyPressCode === codeChallenge[charIndex]) {
          moveCar();
          currentLetter.style.backgroundColor = 'yellow';
        } else {
          currentLetter.style.backgroundColor = 'red';
        }
      }
    }
    >
      <span id='correct' style={{ color: 'white', backgroundColor: 'green' }} />
      <span id='currentLetter' style={{ backgroundColor: 'yellow' }} />
      <span id='incomplete' style={{ color: '#222' }} />

    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CodeContainer);
