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
  width: 600px;
  background: white;
  border-radius: 10px;
`;

const ControlPanel = styled.div`
  display: grid;
  width: 600px;
  grid-template-columns: repeat(3, 33%);
  text-align: center;
  margin-top: 10px;
  padding: 7px 0;
  font-size: .75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: white;
`;

const PlayButton = styled.button`
  font-weight: 700;
  padding: 7px 0;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  background: #1ab188;
  color: #fff;
  border: none;
`;

const Wrapper = styled.div`
  max-width: 700px;
  margin: 40px auto;
  box-shadow: 0 2px 5px 2x rgba(19, 35, 47, .3);
`;

const Title = styled.div`
  font-weight: 700;
  padding: 15px 0;
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  background: #1ab188;
  color: white;
  text-align: center;
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;


const Game = styled.div`
  background: rgba(19, 35, 47, .9);
  padding: 20px;
  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, .3);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
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
  message,
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
      const codingBox = document.querySelector('#codingBox');
      codingBox.focus();
      const id = setInterval(moveCPU, 100);
      setIntervalID(id);
    } else {
      clearInterval(intervalID);
      setIntervalID(null);
    }
    // When player wins, save player's score to database
    if (message === 'Player Wins') saveScore(username, wins);

  }, [gameActive]);

  return (
    <Wrapper>
      <Title>Cipher Chase</Title>
      <Game>
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
          <h2>SCORE : {wins}</h2>
          <PlayButton onClick={playGame}>START</PlayButton>
          <h2 style={{ letterSpacing: '.2em' }}>{message}</h2>
        </ControlPanel>
      </Game>
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
