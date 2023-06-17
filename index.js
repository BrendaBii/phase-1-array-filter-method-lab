// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const driversObj = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
let match = "Bobby";

function findMatching(array, string){
    let str = string.toLowerCase();
    return array.filter(function(item){
        let item1 = item.toLowerCase();
        return item1 === str;
    })
}

function fuzzyMatch(array, string){
    return array.filter(function(item){
        return item.startsWith(string);
    })
}

function matchName(array, string){
    return array.filter(foo);
    function foo(array){
        return array.name === string;
    }
}

console.log(findMatching(drivers, match));
console.log(fuzzyMatch(drivers, "B"));
console.log(matchName(driversObj, match));