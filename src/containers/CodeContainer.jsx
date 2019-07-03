import React from 'react';
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

const Highlight = styled.span`
  background-color: yellow;
`;

const CodeContainer = ({ codeChallenge, charIndex, moveCar }) => (
  <div 
    style={{ border: '1px solid black', width: '500px', height: '500px' }} 
    tabIndex="0"
    onKeyPress={ 
      e => {
        if (String.fromCharCode(e.which) === codeChallenge[charIndex + 1]) {
          moveCar();
        } 
        
      } 
    }
  >
    <Highlight id="highlight">{codeChallenge.substring(0, charIndex + 1)}</Highlight>
    <span>{codeChallenge.substring(charIndex + 1)}</span>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(CodeContainer);
