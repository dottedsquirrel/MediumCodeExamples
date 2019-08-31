let animals = [
    {name: 'Tibbers', type: 'cat', isNeutered: true, age: 2, enteredPagent: true, cutenessScore: 347},
    {name: 'Fluffball', type: 'rabbit', isNeutered: false, age: 1, enteredPagent: true, cutenessScore: 193},
    {name: 'Strawhat', type: 'cat', isNeutered: true, age: 5, enteredPagent: false, cutenessScore: 521}
  ]

//lets say you want to find the total cuteness score of all valid pagent entrants

let totalScore = animals
                    .filter(animal => {return animal.isNeutered})
                    .reduce((accumulator, animal) => {return accumulator + animal.cutenessScore}, 0);

// totalScore will return 868