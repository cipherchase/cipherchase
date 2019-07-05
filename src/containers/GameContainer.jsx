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
  width: 1100px;
  background: white;
  border-radius: 10px;
`;

const ControlPanel = styled.div`
  display: grid;
  width: 1100px;
  grid-template-columns: repeat(3, 33%);
  text-align: center;
  margin-top: 10px;
  padding: 15px 0;
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: white;
`;

const PlayButton = styled.button`
  font-weight: 700;
  padding: 15px 0;
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: #1ab188;
  color: #fff;
  border: none;
`;

const Wrapper = styled.div`
  background: rgba(19, 35, 47, .9);
  padding: 40px;
  max-width: 1200px;
  margin: 40px auto;
  border-radius: 4px;
  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, .3);
  display: flex;
  flex-direction: column;
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
    <Wrapper>
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
        <PlayButton onClick={playGame}>START</PlayButton>
        <h2>{message}</h2>
      </ControlPanel>
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
