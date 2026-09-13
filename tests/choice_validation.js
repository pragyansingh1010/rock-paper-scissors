function validChoice(value) {
  return ['rock', 'paper', 'scissors'].includes(value);
}

console.assert(validChoice('rock'));
console.assert(validChoice('paper'));
console.assert(validChoice('scissors'));
console.assert(!validChoice('stone'));
console.log('Choice validation passed');
