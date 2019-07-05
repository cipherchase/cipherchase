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
  width: 1075px;
  border: 1px solid black;
`;

const mapStateToProps = store => ({
  codeChallenge: store.games.codeChallenge,
  charIndex: store.games.charIndex,
  playerPosition: store.games.playerPosition,
  cpuPosition: store.games.cpuPosition,
  gameActive: store.games.gameActive,
  intervalID: store.games.intervalID,
  winner: store.games.winner,
  wins: store.games.wins,
  username: store.games.username,
});


const mapDispatchToProps = dispatch => ({
  movePlayer: num => dispatch(actions.movePlayer(num)),
  moveCPU: () => dispatch(actions.moveCPU()),
  setIntervalID: intervalID => dispatch(actions.setIntervalID(intervalID)),
  playGame: () => dispatch(actions.playGame()),
});

const GameContainer = ({
  codeChallenge,
  charIndex,
  movePlayer,
  moveCPU,
  setIntervalID,
  playGame,
  intervalID,
  playerPosition,
  cpuPosition,
  gameActive,
  winner,
  wins,
  username,
}) => {
  const saveScore = (player, score) => {
    fetch('http://localhost:3000/scores', {
      method: 'PATCH',
      body: JSON.stringify({ player, score }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then(response => response.json())
      .then(success => console.log(success))
      .catch(err => console.error('Error ', err));
  };

  useEffect(() => {
    // Move CPU when game starts
    if (gameActive) {
      const id = setInterval(moveCPU, 100);
      setIntervalID(id);
    } else {
      clearInterval(intervalID);
      setIntervalID(null);
    }
    // When player wins, save player's score to database
    if (winner === 'Player Wins') saveScore(username, wins);

  }, [gameActive]);

  return (
    <div>
      <h2>Score: {wins}</h2>
      <Races>
        <Race playerName="CPU" position={cpuPosition} />
        <Race playerName="P1" position={playerPosition} />
      </Races>
      <CodeContainer
        codeChallenge={codeChallenge}
        charIndex={charIndex}
        movePlayer={movePlayer}
        gameActive={gameActive}
      />
      <button onClick={playGame}>Play</button>
      <h2>{!gameActive && `${winner}`}</h2>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
