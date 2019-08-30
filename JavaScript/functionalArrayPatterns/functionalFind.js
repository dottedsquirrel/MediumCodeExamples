let animals = [
    {name: 'Tibbers', type: 'cat', isNeutered: true, age: 2},
    {name: 'Fluffball', type: 'rabbit', isNeutered: false, age: 1},
    {name: 'Strawhat', type: 'cat', isNeutered: true, age: 5}
  ]

animalTypeFound = animals.find( animal => animal.type === 'cat' );

// animalTypeFound will return:
// {name: 'Tibbers', type: 'cat', isNeutered: true, age: 2}

animalTypeFilter = animals.filter( animal => animal.type === 'cat' );

// animalTypeFilter will return:
// [{name: 'Tibbers', type: 'cat', isNeutered: true, age: 2}, {name: 'Strawhat', type: 'cat', isNeutered: true, age: 5}]