function winner(player, computer) {
  if (player === computer) return 'draw';
  if ((player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')) return 'win';
  return 'loss';
}

console.assert(winner('rock', 'scissors') === 'win');
console.assert(winner('paper', 'paper') === 'draw');
console.assert(winner('scissors', 'rock') === 'loss');
console.log('RPS result tests passed');
