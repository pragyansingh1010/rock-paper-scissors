const moves = new Set(['rock', 'paper', 'scissors']);

console.assert(!moves.has('lizard'));
console.assert(!moves.has('spock'));
console.assert(moves.has('rock'));
console.log('Invalid move rules passed');
