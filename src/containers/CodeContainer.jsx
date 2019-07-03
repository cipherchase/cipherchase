import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions/actionCreators';

const mapStateToProps = store => (
  {
    codeChallenge: store.games.codeChallenge,
    playerCharIndex: store.games.playerCharIndex,
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

const CodeContainer = ({ codeChallenge, playerCharIndex, moveCar }) => (
  <div style={{ border: '1px solid black' }} onKeyPress={ e => console.log('hi') } tabIndex="0">
    <Highlight id="highlight">{codeChallenge.substring(0, playerCharIndex + 1)}</Highlight>
    <span>{codeChallenge.substring(playerCharIndex + 1)}</span>
    <button
      onClick={ () => moveCar() }>
      Click me
    </button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(CodeContainer);
