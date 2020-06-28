/*
	Template literals allow you write clean/readable code to save the world.
	We can implement concepts like String interpolations, expression interpolations, function calls

	How to use?
	Replace your single or double quotes with backticks
	Then the magic starts ▶️
*/



/* 	
	-----------------------------------
	String Interpolation
	-----------------------------------
*/
let name = "LeBron James";
let profession = "Basketball player"

console.log(`${name} is a ${profession}.`);
// LeBron James is a Basketball player.



/* 	
	-----------------------------------
	Expression Interpolation
	-----------------------------------
*/
let x = 2;
let y = 3;

console.log(`The sum of ${x} and ${y} is ${x + y}.`);
// The sum of 2 and 3 is 5.



/* 	
	-----------------------------------
	Function Call
	-----------------------------------
*/
const year = () => {
    let date = new Date();
    return date.getFullYear();
};

console.log(`${year()} has been the longest year so far.`);
// 2020 has been the longest year so far.



/* 	
	-----------------------------------
	Implicit Type Conversions
	-----------------------------------
*/
let fruits = ["mango","orange","pineapple","papaya"];

console.log(`My favourite fruits are ${fruits}`);
// My favourite fruits are mango,orange,pineapple,papaya

