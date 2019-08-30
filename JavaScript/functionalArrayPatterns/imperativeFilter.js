let animals = [
   {name: 'Tibbers', type: 'cat', isNeutered: true, age: 2},
   {name: 'Fluffball', type: 'rabbit', isNeutered: false, age: 1},
   {name: 'Strawhat', type: 'cat', isNeutered: true, age: 5}
 ]

 /*using imperative*/
 let neuteredAnimals = [];

for (let i=0; i < animals.length; i++){
  let a = animals[i];
  if(a.isNeutered){
    neuteredAnimals.push(a);
  }
}