import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const getProgression = (firstNumber, diff, length) => {
  const progression = [];

  for (let i = 1; i < length; i += 1) {
    progression.push(firstNumber + (i - 1) * diff);
  }

  return progression;
};

const createGameRound = () => {
  const progressionFirstNumber = getRandomNumber();
  const progressionDiff = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(6, 10);

  const progression = getProgression(progressionFirstNumber, progressionDiff, progressionLength);
  const indexOfEmpty = getRandomNumber(0, progression.length);
  const roundAnswer = progression[indexOfEmpty];
  progression[indexOfEmpty] = '..';

  return {
    question: progression.join(' '),
    correctAnswer: String(roundAnswer),
  };
};

const gameRule = 'What number is missing in the progression?';

export default () => {
  playGame(gameRule, createGameRound);
};
