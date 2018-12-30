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
      }
    }

    if (isLetter) {
      filteredInput += input[x];
    } else {
      filteredInput += ' ';
    }
  }

  return filteredInput;
}


module.exports = filterInput;
