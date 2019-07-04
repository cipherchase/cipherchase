import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions/actionCreators';

import Race from '../components/Race.jsx';
import CodeContainer from './CodeContainer.jsx';

const Races = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 1150px;
  border: 1px solid black;
`;

const mapStateToProps = store => ({
  codeChallenge: store.games.codeChallenge,
  charIndex: store.games.charIndex,
  playerPosition: store.games.playerPosition,
  cpuPosition: store.games.cpuPosition,
  gameActive: store.games.gameActive,
  intervalID: store.games.intervalID,
});


const mapDispatchToProps = dispatch => ({
  moveChar: num => dispatch(actions.moveChar(num)),
  moveCPU: () => dispatch(actions.moveCPU()),
  setIntervalID: intervalID => dispatch(actions.setIntervalID(intervalID)),
  resetGame: () => dispatch(actions.resetGame()),
});

const GameContainer = ({
  codeChallenge,
  charIndex,
  moveChar,
  moveCPU,
  setIntervalID,
  resetGame,
  intervalID,
  playerPosition,
  cpuPosition,
  gameActive,
}) => {

  useEffect(() => {
    const id = setInterval(moveCPU, 100);
    setIntervalID(id);
  }, [gameActive]);

  if (!gameActive) {
    clearInterval(intervalID);
    setIntervalID(null);
  }

  return (
    <div>
      <Races>
        <Race playerName="CPU" position={cpuPosition} />
        <Race playerName="P1" position={playerPosition} />
      </Races>
      <CodeContainer
        codeChallenge={codeChallenge}
        charIndex={charIndex}
        moveChar={moveChar}
        gameActive={gameActive}
      />
      <button onClick={resetGame}>Reset</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
