// const age = 12;

// if(age>18){
//     console.log('You are a teenager.')
// }
// else {
//     console.log(`You are an Adult.`)
// }


// console.log(__dirname);
// console.log(__filename);

// setInterval(() => {
//     console.log(`Hello World !!!!`);
// }, 1000);

/*********************************************************************/

// console.log(ashu);
// console.log(ayush);
// console.log(deepak);

// const names = require('./2-names');
// const greeting = require('./3-utils');

// console.log(names);

// greeting.sayhi('ashu');
// greeting.sayhi(names.ayush);
// greeting.sayhi(names.deepak);

// greeting.saybye('ashu');
// greeting.saybye(names.ayush);
// greeting.saybye(names.deepak);

// const data = require('./4-alternate-way');
// console.log(data);

// fetching module without assigning
// require(`./5-mind-grenade`);

// function greet(name){
//     console.log(`Hello ${name} !!! Have a great day.`);
// }

// // setTimeout(greet,2000,'Ashu');
// setInterval(greet,2000,'Ashu');


const _ = require('lodash');

const arr = [1,[2,[3,[4,[5]]]]];
const newarr = _.flattenDeep(arr);
console.log(newarr);


  
