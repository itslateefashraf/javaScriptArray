/* Arrays
 arrays is used to store a collection of values ,such as list
 of number or names */

let Number = [10,10,20,30,50,100]
console.log(Number[3])

// change array elment //

Number[0] = 40;
console.log(Number)

// convert array to string //
console.log(Number.toString())
// arrays are object //
console.log(typeof Number);

// length of an array //

console.log(Number.length)

// length of last element //

console.log(Number[Number.length -1])

// looping array element //

for(i=0; i<Number.length; i++){
    console.log(Number[i])
}
// for Each function //
let totalSum = 0
Number.forEach (getSum)
function getSum(value){
 totalSum = totalSum + value
   
};
 console.log(totalSum);

// jaavascript array Methods //

const fruits = ['banana','orange','mango','apple','grapes']
// return the size of array //

console.log(fruits.length);

// convert an array to string //

console.log(fruits.toString());

// push Method adds a new element to array at the end and returns
// the new array length //

console.log(fruits.push('pineapple'));
console.log(fruits);

//  pop Method removes the last element of array and
// returns the value that was remove // 

console.log(fruits.pop())
console.log(fruits);

// join method is same as toString  but here you can specify
//  the spectoe //


console.log(fruits.join('-'));

// shift method removes the first array element and shifts
// all other element to lower index and return the value that shifted //

console.log(fruits.shift())
console.log(fruits)

// unshift method add a new element to array at begining
// and return new array length //

console.log(fruits.unshift('banana'))
console.log(fruits)

// changing element //
 console.log(fruits[0]= 'lemon')
 console.log(fruits);

 console.log(fruits[2] = 'papaya')
 console.log(fruits);

//  new element to array with lenght property //

console.log(fruits[fruits.length] = 'kiwi')
console.log(fruits)
 
// delete array elememt //

// concat two array in a single aaray //
let cars = ['alto','santro']
let car2 = ['baleno','suzuki']
console.log(cars.concat(car2))
console.log(cars.concat(car2,'maruti'));

// flattering array //


const myArr = [[1,2],[3,4],[5,6]];
console.log(myArr.flat()) 

// splice methodc //
const persons = ['aamir','owais','aasif','altaf']
console.log(persons.splice(2,0 ));