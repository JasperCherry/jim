const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];


const filterInput = (input) => {
  let filteredInput = '';

  for (let x = 0; x < input.length; x++) {
    let isLetter = false;

    for (let z = 0; z < letters.length; z++) {
      if (input[x].toLowerCase() === letters[z]) {
        isLetter = true;
        break;
      }
    }

    if (isLetter) {
      filteredInput += input[x];
    } else {
      filteredInput += ' ';
    }
  }

  filteredInput = filteredInput.trim();

  let noWhitespaceInput = filteredInput[0];

  for (let x = 1; x < filteredInput.length; x++) {
    if (!(filteredInput[x-1] === ' ' && filteredInput[x] === ' ')) {
      noWhitespaceInput += filteredInput[x];
    }
  }

  return noWhitespaceInput;
}


module.exports = filterInput;
