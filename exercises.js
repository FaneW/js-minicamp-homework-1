//Do not change any of the function names

gepogojidpoifgj po

function multiplyByTen(num) {
	var total = num * 10;
	return total;
	
  //return num after multiplying it by ten
  //code here
}

function subtractFive(num) {
	
	var fiveLess = num - 5;
	return fiveLess;
	
  //return num after subtracting five
  //code here
}

function areSameLength(str1, str2) {
	
	if(str1.length === str2.length){
		return true;
		
	}
	return false;
	
  //return true if the two strings have the same length
  //otherwise return false
  //code here
}

function areEqual(x, y) {
	if(x === y){
		
		return true;
	}
	
	return false;
  //return true if x and y are the same
  //otherwise return false
  //code here
}

function lessThanNinety(num) {
	
	if(num < 90){
		return true;
		
	}
	
	return false;
  //return true if num is less than ninety
  //otherwise return false
  //code here
}

function greaterThanFifty(num) {
	
	if(num > 50){
		return true;
	}
	
	return false;
  //return true if num is greater than fifty
  //otherwise return false
  //code here
}

function add(x, y) {
	
	var total = x + y;
	
	return total;
	
  //add x and y together and return the value
  //code here
}

function subtract(x, y) {
	
	var subEach = x - y;
	
	return subEach;
  //subtract y from x and return the value
  //code here
}

function divide(x, y) {
	
	var theDivide = x / y;
	
	return theDivide;
  //divide x by y and return the value
  //code here
}

function multiply(x, y) {
	
	return x * y;
  //multiply x by y and return the value
  //code here
}

function getRemainder(x, y) {
	
	return x % y;
	
  //return the remainder from dividing x by y
  //code here
}

function isEven(num) {
	if(num % 2 === 0){
		return true;
	} 
	return false;
  //return true if num is even
  //otherwise return false
  //code here
}

function isOdd(num) {
	if(num % 2 === 0){
		return false;
	} 
	return true;
	
  //return true if num is false
  //otherwise return false
  //code here
}

function square(num) {
	
	return Math.pow(num, 2);
  //square num and return the new value
  //code here
}

function cube(num) {
	
	var box = Math.pow(num, 3);
	
	return box;
  //cube num and return the new value
  //code here
}

function raiseToPower(num, exponent) {
	
	var bigBox = Math.pow(num, exponent);
	
	return bigBox;
  //raise num to whatever power is passed in as exponent
  //code here
}

function roundNumber(num) {
	
	var round = Math.round(num);
	
	return round;
  //round num and return it
  //code here
}

function roundUp(num) {
	
	var up = Math.ceil(num);
	
	return up;
  //round num up and return it
  //code here
   
}

function addExclamationPoint(str) {
	var happy = str + '!';
	
	return happy;
	
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
}

function combineNames(firstName, lastName) {
	
	var name = firstName + ' ' + lastName;
	
	return name;
	
	
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
}

function getGreeting(name) {
	
	var great = 'Hello ' + name + '!';
	
	return great;
	
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
	
	return length * width;
  //return the area of the rectangle by using length and width
  //code here
}

function getTriangleArea(base, height) {
	
	var rec = base * height;
	var annoying = rec / 2;
	
	return annoying;
  //return the area of the triangle by using base and height
  //code here
}

function getCircleArea(radius) {
	
	var cake = Math.pow(radius, 2);
	var pie = Math.PI;
	var answer = pie * cake;
	
	return Math.round(answer);
	
  //return the rounded area of the circle given the radius
  //code here
}

function getRectangularPrismVolume(length, width, height) {
	
	var lw = length * width;
	var bh = lw * height;
	
	return bh;
	
	
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
