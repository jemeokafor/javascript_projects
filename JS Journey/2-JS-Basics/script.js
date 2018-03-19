// Lecture : Variables

/*

var name = 'John';
var secondName = "Rita";
var age = 26;
var fullAge = true;

console.log(name);
console.log(secondName);
console.log(age);
console.log(fullAge);
*/


// Lecture: Variables 2
/*
var name = 'Jane';
var age = 25;

console.log(name + age);
console.log(age + age);

var job, isMarried;

console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + " years old " + job +  ", Is he Married ?  " + isMarried);

job = " driver ";
age = 'thirty six';

console.log(name + ' is a ' + age + " years old " + job +  ", Is he Married ?  " + isMarried);

var lastName = prompt('What is the last name?');
console.log(lastName);
alert(name + ' is a ' + age + " years old " + job +  ", Is he Married ?  " + isMarried);
*/

// Lecture : Operators
/*
now = 2018;
var birthYear = now - 29;


birthYear = now - 26 * 2;
// 2018 - 52


console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26
console.log(ageJohn);
console.log(ageMark);

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/

//Lecture : If/else statements
/*
var name = 'John';
var age = '26';
var isMarried = 'yes';

if(isMarried === 'yes'){

    console.log(name + ' is married');
}else{
    console.log(name + " will hopefully marry soon");
}

isMarried = true;
*/
/*if(isMarried){
    console.log("Yes!!");
}else{
    
    console.log("NO!");
}*/

/*
if(isMarried){
    console.log("Yes!!");
}

if(23 === '23'){
    console.log('Something to print...');
}
*/

// Lecture : boolean logis and switch
/*
var age = 20;

if(age < 20){
    console.log('John is a teenager');
}else if(age >= 20 && age < 30){
    console.log('John is a young man');
}else{
    console.log('John is a man');
}

var job = 'cop';

job = prompt('what does john do? ');

switch(job){
    case "teacher":
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log("John drives a cab in lisbon");
        break;
    case 'cop':
        console.log('John helps fight crime');
        break;
    default:
        console.log('John does something else');
}
*/

// Coding Challenge 1


/*
var johnAge, johnFriendAge, janeAge, johnHeight, johnFriendHeight, janeHeight;
var johnScore, johnFriendScore,janeScore;

johnAge = 26;
johnFriendAge = 29;
janeAge= 31

johnHeight = 180;
johnFriendHeight = 165;
janeHeight = 158;



johnScore = johnHeight + 5 * johnAge;
johnFriendScore = johnFriendHeight + 5 * johnFriendAge;
janeScore = janeHeight + 5  * janeAge;

console.log( " Scores : John's  = " + johnScore + " John's Friend : " + johnFriendScore);

if(johnScore === johnFriendScore){
    console.log('The game is a draw');
}else if(johnScore > johnFriendScore){
    console.log('John is the winner');
}else if(johnFriendScore > johnScore){
    console.log('Johns Friend is the winner ');
}


console.log( " Scores : John's  = " + johnScore + " John's Friend : " + johnFriendScore + " Jane's :" + janeScore);

if(janeScore === johnScore === johnFriendScore){
    console.log('this game is a draw');
}else if(janeScore > johnScore && janeScore > johnFriendScore){
    console.log('Jane is the winner');
}else if(johnScore > janeScore && johnScore > johnFriendScore){
    console.log('John is the winner');        
}else if(johnFriendScore > johnScore && johnFriendScore > janeScore){
    console.log('JohnFriend is the winner');

}else if(johnScore === johnFriendScore){
    console.log(' John and his Friends have a draw ');     
         
}else if(johnScore == janeScore){
    console.log(' John and Jane have a draw ');             

}else if(johnFriendScore == janeScore){
    console.log('John friend and Jane have a draw');
}

*/


///////////////////////////////////////////////////////////////////
// Lecture : Functions

/*
function calculateAge(yearOfBirth){
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);



function yearsUntilRetirement(name,year){
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if(retirement >= 0){
        console.log(name + " retires in " + retirement + " years ");
    }else{
        console.log(name + " is already retired ");
    }
    
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement("Mike", 1969);
yearsUntilRetirement('Mary', 1948);

*/

/////////////////////////////////////////////////////
// Lecture : Statements and expressions
/*
// function statement
function someFun (par){
    //code
}


// function expression
var someFun = function(par){
    //code
}


// Expressions
3 + 4 ; 
var x = 3;

// Statements

if(x === 5 ){
    
    // do something
}


*/

///////////////////////////////////////////////////////
//Lecture : Arrays
/*
var names = ['John','Jane','Mark'];
var years = new Array(1990,1969,1948);

console.log(names[2]);
names[1] = 'Ben';

console.log(names);

var john = ['John','Smith',1990,'designer',false];

john.push('blue');
john.unshift('Mr.');
var firstElement = john.shift();
var lastElement = john.pop();


console.log(john);
console.log('first element ' + firstElement);
console.log('last element '+ lastElement);

if(john.indexOf('driver') === -1){
    console.log('driver is not in the array ');
}
*/


///////////////////////////////////////////////////////////
// Lecture : Javascript Objects 
/*

var john = {
    name:'John',
    lastName:'Smith',
    yearOfBirth:1990,
    job:'teacher',
    isMarried:false
    
};


console.log(john.lastName);
console.log(john['job']);

var testVar = 'isMarried';

console.log(john[testVar]);

john.lastName = 'Merkel';
john['job'] = 'programmer';
console.log(john);


var jane = new Object();

jane.name = 'Jane';
jane.lastName = "Johnson";
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);


*/

////////////////////////////////////////////////////////////
// Lecture : Objects and methods
// v1.0
/*
var john = {
    name:'John',
    lastName:'Smith',
    yearOfBirth:1990,
    job:'teacher',
    isMarried:false,
    familiy:['Jane','Mark','Bob'],
    calcultateAge: function(){
        return 2018 - this.yearOfBirth;
    }
    
};


console.log(john.calcultateAge());
var age = john.calcultateAge();
john.age = age;

console.log(john);

*/

//v2.0
/*
var john = {
    name:'John',
    lastName:'Smith',
    yearOfBirth:1990,
    job:'teacher',
    isMarried:false,
    familiy:['Jane','Mark','Bob'],
    calcultateAge: function(){
        this.age = 2018 - this.yearOfBirth;
    }
    
};


john.calcultateAge();
console.log(john);


var mike = {
    yearOfBirth:1990,
    calcultateAge: function(){
        this.age = 2018 - this.yearOfBirth;
    }
    
};


mike.calcultateAge();
console.log(mike);


var car = new Object();

car.name = 'Audi';
car.engine = '500hp';
car.type = 'Saloon';
car.color = 'Blue';

console.log(car);


var house = {
    type: 'Duplex',
    bedrooms:4,
    cost:5000000,
    propertyTax:12.0,
    rent:function(){
        return (this.cost * 0.1) + (this.cost * (this.propertyTax/100.0));
    }
}
//house.rent();
console.log(house.rent());

*/
///////////////////////////////////////////////////////////
//Lecture: Loops

// For Loops
/*
for(var i = 0; i < 10; i++){
    console.log(i);
}

var names = ['John','Jane','Mary','Mark','Bob'];

for(i = 0; i < 5;i++){
    console.log(names[i]);
}

console.log(names.length);

for (var x = names.length - 1; x >= 0 ; x--){
    console.log(names[x]);
}



// while loops
var i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}

*/
/*
for (var i = 1 ; i <= 5 ; i++){
    
    console.log(i);
    if(i === 3){
        break;
    }
}


for (var i = 1 ; i <= 5 ; i++){
    
    
    if(i % 2 != 0){
        continue;
    }
    
    console.log(i);
}


*/


/*

var birthYearsArray = [1983,1945,1967,2013,1992,1980,2000];
var birthYearsArrayFemale = [1983,1945,1967,2013,1992,1980,2000];
var birthYearsArrayMale = [1973,2005,1987,2008,1999,1980,2011];
var emptyArray = [];

for(var i = 0; i < birthYearsArray.length; i++){
    emptyArray[i] = 2018 - birthYearsArray[i];
}

console.log(emptyArray);

for(i = 0; i < emptyArray.length ; i++){
    
    if(emptyArray[i] >= 18){
        console.log(' candidate is of full age , at ' + emptyArray[i]);
    }else{
        console.log(' candidate is not of full age, at ' + emptyArray[i]);
    }
}



function printFullAge(birthYearsArray){
    var arrayOfAges, arrayOfFullAgeBooleans;
    arrayOfAges = [];
    arrayOfFullAgeBooleans = [];
    
    for(var i = 0; i < birthYearsArray.length; i++){
        arrayOfAges[i] = 2018 - birthYearsArray[i];
    }
    
    
    for(i = 0; i < arrayOfAges.length ; i++){
    
        if(arrayOfAges[i] >= 18){
           // console.log(' candidate is of full age , at ' + emptyArray[i]);
            arrayOfFullAgeBooleans[i] = true;
        }else{
           // console.log(' candidate is not of full age, at ' + emptyArray[i]);
            arrayOfFullAgeBooleans[i] = false;
        }
    }
    
    return arrayOfFullAgeBooleans;
}


var fullAgeArrayFemale = printFullAge(birthYearsArrayFemale);
var fullAgeArrayMale = printFullAge(birthYearsArrayMale)
console.log(fullAgeArrayFemale);
console.log(fullAgeArrayMale);


*/






























































































































































































