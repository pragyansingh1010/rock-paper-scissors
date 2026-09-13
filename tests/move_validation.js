function validMove(move) {
  return ['rock', 'paper', 'scissors'].includes(move);
}

console.assert(validMove('rock'));
console.assert(validMove('paper'));
console.assert(validMove('scissors'));
console.assert(!validMove('lizard'));
console.assert(!validMove(''));
console.log('RPS move validation passed');
