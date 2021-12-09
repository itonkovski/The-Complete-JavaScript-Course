'use strict';

//Elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

const player0TotalScore = document.getElementById('score--0');
const player1TotalScore = document.getElementById('score--1');

const player0CurrentScore = document.getElementById('current--0');
const player1CurrentScore = document.getElementById('current--1');

//Buttons
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');

//Dice element
const diceElement = document.querySelector('.dice');

let activePlayer;
let currentScore;
let totalScore;
const finalScore = 100;
let playing;

//Starting conditions
const startingPoint = function () {
  activePlayer = 0;
  currentScore = 0;
  totalScore = [0, 0];
  playing = true;

  player0TotalScore.textContent = 0;
  player1TotalScore.textContent = 0;
  player0CurrentScore.textContent = 0;
  player1CurrentScore.textContent = 0;

  diceElement.classList.add('hidden');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
};

startingPoint();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

//Rolling the dice functionallity
btnRollDice.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//User holds the score
btnHold.addEventListener('click', function () {
  if (playing) {
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    if (totalScore[activePlayer] >= finalScore) {
      playing = false;
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      startingPoint();
    }
  }
});

btnNewGame.addEventListener('click', startingPoint);
