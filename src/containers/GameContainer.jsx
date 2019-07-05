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

const ControlPanel = styled.div`
  display: grid;
  width: 1075px;
  grid-template-columns: repeat(3, 33%);
  text-align: center;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 5px;
`;

const PlayButton = styled.button`
  font-size: 30px;
  font-weight: 700;
  background-color: #eee;
  border-radius: 10px;
  letter-spacing: 10px;
`;


const mapStateToProps = store => ({
  codeChallenge: store.games.codeChallenge,
  charIndex: store.games.charIndex,
  playerPosition: store.games.playerPosition,
  cpuPosition: store.games.cpuPosition,
  gameActive: store.games.gameActive,
  intervalID: store.games.intervalID,
  message: store.games.message,
  wins: store.games.wins,
});

const mapDispatchToProps = dispatch => ({
  movePlayer: num => dispatch(actions.movePlayer(num)),
  moveCPU: () => dispatch(actions.moveCPU()),
  setIntervalID: intervalID => dispatch(actions.setIntervalID(intervalID)),
  playGame: () => dispatch(actions.playGame()),
});

// GAME CONTAINER

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
  message,
  wins,
}) => {

  const saveScore = (username, score) => {
    fetch('http://localhost:3000/scores', {
      method: 'PATCH',
      body: JSON.stringify({ username, score }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then(response => response.json())
      .then(success => console.log(success))
      .catch(err => console.error('Error ', err));
  };

  useEffect(() => {
    // Move CPU when game starts
    if (gameActive) {
      const codingBox = document.querySelector('#codingBox');
      codingBox.focus();
      const id = setInterval(moveCPU, 100);
      setIntervalID(id);
    } else {
      clearInterval(intervalID);
      setIntervalID(null);
    }
    // When player wins, save user's score to database
    // For now, username temporarily is hardcoded to 'codesmith'
    // until it is available in Redux Store
    if (message === 'Player Wins') saveScore('codesmith', wins);

  }, [gameActive]);

  return (
    <div>

      <Races>
        <Race playerName="CPU" position={cpuPosition} shipColor="#c15ce7" circleColor="purple" />
        <Race playerName="P1" position={playerPosition} shipColor="#1ab188" circleColor="green" />
      </Races>
      <CodeContainer
        codeChallenge={codeChallenge}
        charIndex={charIndex}
        movePlayer={movePlayer}
        gameActive={gameActive}
      />
      <ControlPanel>
        <h2>Score: {wins}</h2>
        <PlayButton onClick={playGame}>Start</PlayButton>
        <h2>{message}</h2>
      </ControlPanel>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
