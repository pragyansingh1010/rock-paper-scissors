function result(a, b) {
  if (a === b) return 'draw';
  return 'play';
}

console.assert(result('rock', 'rock') === 'draw');
console.assert(result('paper', 'paper') === 'draw');
console.assert(result('scissors', 'scissors') === 'draw');
console.log('Tie rules passed');
