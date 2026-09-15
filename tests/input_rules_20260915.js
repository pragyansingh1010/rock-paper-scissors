function validChoice(choice) {
  return ['rock', 'paper', 'scissors'].includes(choice);
}

console.assert(validChoice('rock'));
console.assert(!validChoice('spock'));
