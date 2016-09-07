"use strict"
// prototypes
// a means of adding properties/functions to exising objects

let myArray = [1,3,5,7,11,23,55, 'Bronsyn'];

// see if any 'some' of the array elements returns true
console.log(myArray.some(item => item >= 23))

// let's add a function to all arrays --> are you Bronsyn function isBronsyn()
Array.prototype.isBronsyn = function() {
	return this.some(item => item=='Bronsyn');
}
console.log('myArray.isBronsyn()', myArray.isBronsyn())


// add a function to Function
Function.prototype.isBronsyn = function() {
	return this == 'Bronsyn';
}

let myString = 'Bronsyn'
console.log('myString.isBronsyn()', myString.isBronsyn())



function Person(first, last, age, height) {
	this.first = first
	this.last = last
	this.age = age
	this.height = height
	this.fullName = function() {this.first + ' ' + this.last}
}

//let james = new Person('james', 'smith', 22, '5ft 8in')
//console.log (james)

Person.prototype.nationality = 'English'

let fred = new Person('fred', 'blogs', 33, '6ft', 'French')

console.log (fred)
console.log(fred.nationality)
console.log(fred.prototype)
console.log(fred.__proto__)

