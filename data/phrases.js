// phrases must be very specific, only essential words
const phrases = [
  [
    [
      'What',
      'Why',
      'Where',
      'How',
    ],
    'Sorry, you need to be more specific for me to understand'
  ],
  // man
  [
    [
      'What is man doing',
      'What is he doing'
    ],
    'The man is sitting and preparing meal'
  ],
  [
    [
      'Why is man preparing meal',
      'Why is he preparing meal',
    ],
    'The man is probably hungry'
  ],
  [
    [
      'Why is man sitting',
      'Why is he sitting',
    ],
    'Because he is preparing meal'
  ],
  [
    [
      'Where is man',
      'Where is he',
    ],
    'The man is on the left'
  ],
  [
    [
      'What is man wearing',
      'How does man look',
      'What is he wearing',
      'How does he look',
      'How he looks',
      'How man looks',
    ],
    'The man is wearing green jacket and gray shorts'
  ],

  // woman
  [
    [
      'What is woman doing',
      'What is she doing'
    ],
    'The woman is sitting and preparing meal'
  ],
  [
    [
      'Why is woman preparing meal',
      'Why is she preparing meal',
    ],
    'The woman is probably hungry'
  ],
  [
    [
      'Why is woman sitting',
      'Why is she sitting',
    ],
    'Because she is preparing meal'
  ],
  [
    [
      'Where is woman',
      'Where is she',
    ],
    'The woman is between the man and the tent'
  ],
  [
    [
      'What is woman wearing',
      'How does woman look',
      'What is she wearing',
      'How does she look',
      'How she looks',
      'How woman looks',
    ],
    'The woman is wearing green jacket and gray shorts'
  ],

  // couple
  [
    [
      'What is couple doing',
      'What are they doing'
    ],
    'The couple is sitting and preparing meal'
  ],
  [
    [
      'Why are they',
      'Why are they preparing meal',
    ],
    'The couple is probably hungry'
  ],
  [
    [
      'Why are they sitting',
      'Why is couple sitting',
    ],
    'Because they are preparing meal'
  ],
  [
    [
      'Where is couple',
      'Where are they',
    ],
    'The couple is next to the tent'
  ],
  [
    [
      'What are they wearing',
      'What is couple wearing',
      'How they look',
      'How does couple look',
    ],
    'The woman is wearing green jacket and gray shorts'
  ],

  // tent
  [
    [
      'Where is tent',
    ],
    'The tent is on the right'
  ],
  [
    [
      'How does tent look',
      'How tent looks',
    ],
    'The tent is green'
  ],

  // place
  [
    [
      'Where is this place',
      'Where is it',
    ],
    'This place is in the mountains'
  ],
  [
    [
      'How does this place look',
      'How this place looks',
    ],
    'This place is full of snow'
  ],

  // picture
  [
    [
      'What is in the picture',
    ],
    'There is a couple with a tent'
  ],
];


module.exports = phrases
