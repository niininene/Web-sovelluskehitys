//Task 1
let customers = [
    {
      name: 'ABC Inc',
      credit: 100,
    },
    {
      name: 'ACME Corp',
      credit: 200,
    },
    {
      name: 'IoT AG',
      credit: 300,
    },
  ];
console.log(customers.find((c) => c.credit > 100));

//Task 2
let cities = [
    { name: 'Los Angeles', population: 3792621 },
    { name: 'New York', population: 8175133 },
    { name: 'Chicago', population: 2695598 },
    { name: 'Houston', population: 2099451 },
    { name: 'Philadelphia', population: 1526006 },
  ];
  let bigCities = cities.filter(function (threemillion){
    return threemillion.population > 3000000;
  });
console.log(bigCities);

//Task 3
let upper = ['A', 'B', 'C'];
let lower = ['a', 'b', 'c'];
let digits = [1, 2, 3];
let alphanumerics = upper.concat(lower,digits);
console.log(alphanumerics);