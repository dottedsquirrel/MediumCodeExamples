let numbers = [100, 20, 10];

// result will return 70 as the value
// The function inside reduce will run twice. 
// the first time, x = 100, y = 20
// the second time, x = 80, y = 10

result = numbers.reduce((x, y) => { return x - y; });

