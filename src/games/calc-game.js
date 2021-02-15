import playGame from '../index.js';
import getRandomNum from '../utils/random-num.js';

const getRandomOperation = () => {
  const operations = ['-', '+', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
};

const calc = (num1, operation, num2) => {
  const firstNum = parseInt(num1, 10);
  const secondNum = parseInt(num2, 10);
  let result;

  switch (operation) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    default:
      break;
  }

  return result;
};

const createQuestion = () => `${getRandomNum()} ${getRandomOperation()} ${getRandomNum()}`;

const getCorrectAnswer = (question) => {
  const operands = question.split(' ');
  const correctAnswer = calc(operands[0], operands[1], operands[2]);
  return `${correctAnswer}`;
};

export default (userName) => {
  playGame(userName, createQuestion, getCorrectAnswer);
};