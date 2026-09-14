function winner(a, b) {
  if (a === b) return 'draw';
  if ((a === 'rock' && b === 'scissors') || (a === 'paper' && b === 'rock') || (a === 'scissors' && b === 'paper')) return 'player';
  return 'computer';
}

console.assert(winner('rock', 'scissors') === 'player');
console.assert(winner('paper', 'rock') === 'player');
console.assert(winner('scissors', 'paper') === 'player');
console.assert(winner('rock', 'paper') === 'computer');
console.log('Winner rules passed');
