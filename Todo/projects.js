/*/*const taskList = document.getElementById(task-list);
//Add task with checkboxes
function addTask(task) {
    const taskHTML = `
    <li>
        <input type="checkbox" id= "${task.id}">
        <label for="${task.id}">${task.name}</label>
    `;
    taskList.innerHTML += taskHTML;
}
//Update task status when checkbox is clicked
taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'INPUT') {
        const taskId = e.target.id;
        const task = tasks.find((task) => task.id === taskId);
        task.completed = !task.completed;
        updateTaskList();
    }
});
//Update task list display
function updateTaskList() {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
        addTask(task);
    }); 
}*/

/*let name = 'Collins'
let age = 24
let person = {
    name: 'Collins',
    age: 24
}
let newName = 'Legacy'
let newPerson = {
    name: 'Legacy',
    age: 25
}
console.log(newPerson);*/


/*let amount = 'hello';
amount = parseInt(amount);
//amount = +amount;
 
//amount = Boolean(amount);

console.log(typeof amount, amount);*/

/*const myString = 'student';
let myNewString;
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1, 7);
console.log(myNewString);*/

//Create a variable called X thats a random number from 1 - 100, same for Y but with 1 - 50.

/*const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

const sum = x + y;
sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);
const subtraction = x - y;
minusOutput = `${x} - ${y} = ${subtraction}`;
console.log(minusOutput);
const divition = x / y;
divideOutput = `${x} / ${y} = ${divition}`;
console.log(divideOutput);
const multiplication = x * y;
multipyOutput = `${x} * ${y} = ${multiplication}`;
console.log(multipyOutput);*/




/*let d;
d = new Date();

d = new Date(2024, 1, 30, 12, 59, 1);

d = new Date('2024-01-31T12:30:00');

d = Date.now();

d = new Date('07-24-2024');
d.getTime();


d = new Date(1774555666725);

console.log(d);*/


// Date-Time Methods
/*let x;
let d = new Date();

x = d.toString();
x = d.getTime();
x = d.getDate();

x = `${d.getFullYear()}-${d.getDate()}-${d.getMonth() + 1}`;

x = Intl.DateTimeFormat('en-Cm').format(d);

x = Intl.DateTimeFormat('default', { month: "long" }).format(0);
x = d.toLocaleDateString('default', {
    weekday: 'long',
    year: 'numeric',
    day: '2-digit',
    dayPeriod: 'long',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'GMT',
    timeZoneName: 'long',
})*/

//Arrays and Objects

/*const x = [1, 2, 3, 4];
const fruit = ['banana', 'orange', 'pear', 'pawpaw'];
fruit[fruit.length] = 'plum';
console.log(fruit);*/


//Array Methods

/*.push
.pop
.include
.reverse
.indexOf
.slice
.splice
.concat
.flat
// the spread operator(...) can do the same thing as concat
// we use the flat method to flatten an array and make all the nested arrays as one single array.


//Static metthods on array objects
.isArray (used to find out if an an object is an array)
.from(this is used to take a string and creat an array)
.of (used to creat an arrays)*/

//1 Use arrays to mutate an array (values with 1 through 5)

/*let x;

const arr = [1,2,3,4,5];

arr.push(6);
arr.unshift(0);
arr.reverse()

console.log(arr);*/


//2 combine arr1 and arr2

/*const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9];

const x = arr1.slice(0, 4).concat(arr2);

console.log(x);*/

// Object Literals
/*let x;
const person = {
    name: 'Collins',
    age: 24,
    isStudent: true,
    likes: ['playing', 'coding', 'reading'],
    address: {
        home: 'Vital lodge, Eziobodo',
        state: 'Imo State',
        country: 'Nigeria'
    }
}
console.log(person);*/

// Object spread OPS & Methods

let x;
 
/*const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
//const obj3 = { obj1, obj2 };

const todos = [
    {id: 1,  name: 'read'},
    {id: 2,  name: 'code'},
    {id: 3,  name: 'rest'},
];

x = todos[0].name;

console.log(x);*/

/*const todo = {
    id: 'Collins',
    title: 'Codes everyday',
    user: {
        name: 'Legacy',
        password: '0088762'
    }
};
// The curly braces is used for destructuring of the object.
const { id, title, user: {password} } = todo; 

console.log(id, title, password );*/


// Destructuring Arrays

/*const values = [244, 255, 266, 'Victor', 'Emmanuel'];

const [first, ...string] = values;

console.log(first, string);*/

//JSON Intro

/*const post = {
    id: 2,
    title: 'lets code',
    body: 'this is a fun journey.',
};*/

// Convert to JSON string
/*const str = JSON.stringify(post);
console.log(str);*/

// Parse JSON

/*const obj = JSON.parse(str);
console.log(obj);*/

//Object Challenge

/* 1 Create an array of Objects called LIBRARY. Add 3 objects with a property of title, author, status. Ttile and AAuthor should be strings (whatever value i wish)and status should be another object with properties of OWN, READING, and READ. Which should all be bolean values. For all status, set OWN to true and READING and READ to false.*/

/*const library = [
    {
        title: 'Coding is Fun',
        author: 'Collins',
        status: {
            own: true,
            reading: false,
            read: true,
        }
    },
    {
        title: 'Ranger Apprentice',
        author: 'John Flanagan',
        status: {
            own: false,
            reading: 'Finished',
            read: true,
        }
    },  
    {
        title: 'Hunger Games',
        author: 'Suzane Collins',
        status: {
            own: false,
            reading: 'Completed',
            read: true,
        }
    }
];

// Destructuring

//const { title: firstBook } = library[0];
//const { title: secondBook } = library[1];
//const { title: thirdBook } = library[2];

library[0].status.read = false
library[1].status.read = true
library[2].status.read = false

console.log(library);*/


// Function Return

/*function fn1(X) {
    function fn2(Y) {
        return X * Y;
    }
    return fn2;
}

let result = fn1(3)
console.log(result);

console.log(result(2));

// Callbacks
/*function display(result) {
    console.log(result);
}

function add(num1, num2, num3) {
    let sum = num1 + num2;
    num3(sum)
}

add(20, 10, display)*/

 
//Functions,Scope & Execution Context
// this is used when we want to call a function that doesn't need to be declared.
/*function hey() {
    console.log("hello " + "Collins");
}
hey();

// this is used when you want to assign/declare a function
function add(X, Y) {
    console.log(X + Y);
}

add(2, 3);



//Params nd Argu

//Default Params
// you use this for setting a defualt variable in a function
function registerUser(User = 'Colllins') {
    return User + ' is registered';
}

console.log(registerUser());

//Rest Param
//you can parsein unlimmited number of variables using the rest operator
function Sum(...numbers) {
    
    let total = 0;
    for (const num of numbers) {
        total += num;
    }

    return total;

}
console.log(Sum(1, 2, 3, 4, 5, 6,));


// Objects as params
// this is used when using objects as parameters in a functiion.
// the return value is used to return a variable to the specified location its needed.
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}
const user = {
    id: 2,
    name: 'Collins'
};
console.log(loginUser(user));

// you can also parse in more than one value as far as we are using the paramter used in the function.
// alwaysremeber to use the assigned variable container for the variable storage

console.log(
    loginUser({
        id: 5,
        name: 'Legacy',
    })
);

// Arrays as params//
// when trying to create an array as a param we need to create a constant variable, then use any of the number methods to achieve our required solutions, create another const variable that will serve as a container for the initial constant (it will serve as the array, as it will start with the values of the assigned name of the parameter then denoted with brackets to represent the arrays). to print our final result we make use of the constant used on the array variable, then proceed to call the function while placing the various needed values in the function name with brackets to make it serve as an array.//
// you can also use the rest operator on the function which will take out the need to put brackets when we decide to call the function//

function randomNumber(...num) {
    const randomValue = Math.floor(Math.random() * num.length);

    const values = num[randomValue];
    
    console.log(values);
}

randomNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);


//Scopes(Global and Function)

// all our codes (variables that are defined outside the funtions)that we write outside our functions are all in the global scope of the windows /it can also br found in ur functions.
//but remeber functions have their own scopes, these scope occure when out variables are defined inside the function and they are known as function scope.
// remeber our global scope can be accesed anywhere while also putting into consideration that once you have created a variable thats on the global scope in the function its will override the global scope nd take its place as it will serve as the main vvariable(known as variable shadowing).
// Local scope: are scopes that represent the area where the variable is located at that given moment in time.


function height() {
    console.log(window.innerHeight);
}
height();


//Block Scope
// Note var  is not block leveled scope

/*const X = 100;
if (true) {
    const y = 200
    console.log(X + y);
}


//Diff btwn Var and Const
// Var is function scoped, when you create a global scope with var it displayes on the window panel while const and let dont show there.

function food() {
    const b = 'legacy'
    var c = 'Collins'
    console.log(b);
}
food();

//Nested Scope
// when nesting a function and want to call it always remeber to call the child in the parent function(in this case the second is called in the first function(parent)) while the paren is called outside of the parent function (here the first is called outside of the parent function.)

/*function first() {
    const v = 300;

    function second() {
        const n = 500;
        console.log(v + n);
    }
    
    second()
}
first();
// when nesting scopes with if statements remeber that if you want to run the statement you must call the nested if in the child if statement(here the child if is the nested if). if you dont run it inside it then the code will produce an error message with the called value not defined. 
if (true) {
    const g = 600;

    if (g === 600) {
        const r = 400;
        console.log(g + r);
    }
}

//Function declaration vs Expression
// we can call a function not only through its declaration but through the use of expressions.
//when using the retun value to add value to a function learn to use the plus symbol (+) to concat the values.
function addNickname(name) {
    return 'Kaizen' + name
}
console.log(addNickname(' Collins'));

//Function Expression
//when using an expression you create a constant (this serves as the expression) then you link the function to the expression ( = function).
// hoisting this is the process of moving all the function to the top of a current scope before it is called. remeber only declaration are moved before the function. 
const addMinusSign = function (value) {
    return '-' + value
}
console.log(addMinusSign(200));

// Arrow Functions
//this is the use of the fat arrow to create a function (=>), this is used of the function name or parameter has been assigned. it can also be used with replacing the curly braces.

const multiply = (j, l) => {
    return j * l
}
console.log(multiply(2, 3));


// this removes the return variable and can be used to make ur code short 
const Divide = (w, q) => w / q;
console.log(Divide(2, 5));

// When we have a single parameter we dont need to put parenthess around it when we use the arrow function, this can only work when you have a single parameter.

/*const single = h => h * 3;
console.log(single(30));

// when using the arrow function to return an object you have to cover the object with parentheses.
// Most know when calling an oject learn to add the parameters even if its empty you should place in the empty parentheses in the command to   
const objCreated = () => ({
    title: 'Colllins',
});
console.log(objCreated());

//Immediatly invoked function(IIFE)
//These are used when trying to work on two scripts to show in a particular html file. they are made in order to avaoid congestation of the global scope in our code. when trying to write the IIFE code you need to key in the function into a  set of brackets. its best used for debugging.


// CHALLENGES ON FUNCTIONS

// NUM 1
//Create a function using the getCelsius() that takes the tempeature in farenheight as an argument and returns in celsius. try it with arrow functions too. 

/*function getCelsius(F) { 
    const celsius = (F - 32) * 5 / 9
    return celsius
}
console.log(getCelsius(45));*/
 
/*const getCelsius = F => (F - 32) * 5 / 9;
console.log(`the temp is ${getCelsius(60)} \xB0C`);



//NUM 2
// Create an arrow function called minMax() that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.

function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
        min,
        max,
    };
};
console.log(minMax([0, 1, 2, 3, 4, 5, 6, 7]));

//NUM 3
// Create an IIFE that takes in the length and width of a rectangle outputs it to the console in a message as shown. 

/*((Length, Width) => {
    const area = Length * Width;
    const output = `the length of a rectangle is ${Length} and the width is ${Width} solution of the area is ${area}`;
    console.log(output);
}) (100, 200);


//EXECUTION CONTEXT
// the execution context contains only the running code and everything it aids in its execution. there are two types of execution context, the global and the function.


//Call stack: this is a data structure that stores and runs the code from the last stack of the fuction to the first stack of function.



//Logic & Control Flow
//if statements
if (true) {
    console.log('this is true');
}
//Shorthand 1: when working with Javascript if staments you can take out the curly braces. you can aslo use the else in the statement without using the curly braces too.

//else if: this is used before the the else in the if else statement.
// we can also nest if staments inside if statements this is done to produce space for more options. we can also make use of multiple conditions in our statements.

//switches: when working on switches remeber that the cases are the options writen in our assignment
const d = new Date(2024, 3, 10, 24, 0, 0);
const month = d.getMonth();

switch (month) {
    case 1:
        console.log('its January');
        break;
    case 2:
        console.log('its May');
        break;
    default:
        console.log('it is the month of June');
}



//Challenge
//Calculator: create a function called calculator that takes three parameters num1, num2 and operator. the OPs can be +,-,/,*, anything other than the four operator is passed in, the functon should return an error message.

function Calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '-':
            result = num1 - num2;
            break;
        case '+':
            result = num1 + num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    
        default:
            result = 'Error'
    }
    console.log(result);
    return result;
};

Calculator(3, 4, '+');
Calculator(3, 4, '%');


// truthy nd falsy
// a string with anything in it is always truthy.

//falsy values:
//false
//0
//"" or ''{empty string}
//null
//underfined
//NaN

//truthy values:
//everything
//true
//"0"
//'0' {remeber anything in qoutes r truthy}
//'false'
//[]
//{}
//()
//function () {} {empty function}

/*const lynx = true;

if (lynx) {
    console.log("Lynx's are from the felin family");
} else {
    console.log("Lynx's are from the cat family");
}
console.log(Boolean(lynx));


//truthy nd falsy caveats
const kids = 3;
if (kids) {
    console.log(`if you have ${kids} kids`);
} else {
    console.log('enter the number of kids');
}


//checking for empty arrays
 const posts = ['Legacy' , 'Vega' , 'Cruz']
if (posts) {
    console.log(`name of recruits to be posted: ${posts}`);
} else {
    console.log('no posts');
}

// Checking for empty objects
const User = {
    name: 'Collins'
};
if (User.name != 'legacy' ) { 
    console.log(`Write ur username: ${User.name}`);
} else {
    console.log('Not authorized');
}

//Logical Ops
//&& (double and percent) when we use this we have to make sure that all the values in the bracket are true if not they will give us false as an ans.
//&& will return the first falsy value or the last value, it also aids in hiding a value from a user.
console.log(10 > 20 && 30 > 15);
// but if we use the double pipes (||, OR) it parses each nd tells us that the value is true no matter if one part of the expression is false. returns the first truthy value or last value.

console.log(10 > 20 || 30 > 15);

//??(null or undefined) this returns the right side operand when the left is null or undefined.
//Logical Assignment

// ||= assign the right side value if the left is a falsy value
// &&= assigns the right side value if the left is a truthy value
// ??= assigns the right side value if the left is null or undefined


// Tenary Ops
// this is a form of write that makes ur code simple to write using the condition statement, ?, and a :, to write the code.
/*let age = 20; // when writing a condition you must give it a reason so it can follow the condition.  
age >= 19 ? console.log('you cant vote') : console.log('you can vote'); 

// Assigning a conditional value to a variable
const canVote = age >= 19 ? true : false;
console.log(canVote);

//multiple statements
const auth = true
//let redirect;
/*if (auth) {
    alert('Welcome aboard');
    redirect = '/dashboard';
} else {
    alert('Access denied');
    redirect = '/login'
}
console.log(redirect);*/
//when working with multiple statements you evaluate the variable. when working with only an if statement without an else we can use the you can assign the else(:) with a null
//const redirect = auth
    // ? (alert('welcome aboard'), '/dashboard') :
    //(alert('Access denied'), '/Login');
//console.log(redirect);



//loops & high array methods
//For loop: control structure that helps someone to repeat a statement till a certain condition is not or is not met. its aids in making tasks automated.

//for (initialExpression); (conditionExpression); (incrementExpression); statement;
//initialExpression: initializes a variable/counter
//conditionExpression: Condition that the loop will continue to run as long as its met or untill the condition is false
//incrementExpression: Expression that will be executed after each interation of the loop. Usually increments the value.
// Statement: code that will be executed each time the loop is run. TO execute a block of code, use the  `{}` synthax.
//in this code the i = 0 initializes the expression, the i < 10 provides the condition to be executed, finally the i++ serves to provide an increase to the number of times we want the expresssion to run in the loop.

//for (let i = 0; i < 10; i++) {
  //  if (i === 7) {
    //    console.log('7 is the number for my birth month');
    //} else {
       // console.log('Number' + i);    
    //}
    
//};

//nesting loops
/*for (let i = 1; i <= 10; i++) {
    console.log('number ' + 1);
    for (let j = 1; j  < 5; j++) {
        console.log(`${1} * ${j} = ${i * j}`);
    }
}

//loop through an array
//note never use an infinit loop as it will crash ur browser, and it occurs only when you mess up with the conditionals

const names = ['Brad', 'Sam', 'Qin', 'Hung'];
for (let i = 0; i < names.length; i++) {
    if (i == 3) {
        console.log( names[i] + ' is the best');    
    } else {
        console.log(names[i]);
    }
    
}


// Break nd continue
//Break: this is used to create an end to a particular loop ones its gotten to the required step.

/*for (let i = 0; i <= 20; i++) {
    if (i === 15 ) {
        console.log('Breaking....');
        break;
    }
    console.log(i);
}

//Continue
for (let i = 0; i <= 20; i++) {
    if (i === 15) {
        console.log('Continue....');
        continue;
    }
    console.log(i);
}


//While and Do While loops

//while
// to avaoid an infinite loop always remeber to add an increment expression in ur statement.

//let i = 0;

//while (i <= 20) {
  //  console.log('number ' + i); i++;
//}

//const arr = [10, 20, 30, 40]
//while (i < arr.length) {
  //  console.log(arr[i]); i++;
//}

//while (i <= 5) {
  //  console.log('NUmber' + i);
    //let j = i
    //while (j <= 5) {
      //  console.log(`${i} * ${j} = ${i + j}`); 
        //j++;
    //}
    //i++;
//}

// Do while loops: these loops r loops that r used if you want the code to run atleast once even though it doesnt get to the wanted result.

//Challenges
//FizzBuzz Challenges
//log numbers from 1 to 100, for multiples of 3 you want to print fiz instead of the values, for multiples of five print Buzz, for multiples of both threes and fives print FizBuzz.

/*for (let i = 1; i <= 100; i++) 
    {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
     } else {
        console.log(i);
    }

}*/


//ForEach
// the forEach syntax is used for
//const socials = ['Twitter', 'Facebook', 'Instagram', 'LinkedIn']
//console.log(socials,__proto__);
//socials.forEach(function (item) {
  //  console.log(item);
//});
//socials.forEach((item, index, arr,) => console.log(`${index} - ${item}`, arr));

/*function logSocials(socials) {
    console.log(socials);
}
//socials.forEach(logSocials)

const socialObjs = [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Facebook'fd, url: 'https://facebook.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'LinkedIn', url: 'https://linkedIn.com' },
];
socialObjs.forEach((item) => console.log(item.url));
*/      
//Filter
//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//const evenNumbers = numbers.filter(function (numbers) {
  //  return numbers % 2 === 0;
//});
//console.log(evenNumbers);

/*const companies = [
    { name: 'Company one', Category: 'Finnance', Start: 1995, End: 2001 },
    { name: 'Company Two', Category: 'Auto', Start: 1990, End: 2009 },
    { name: 'Company Three', Category: 'Finnance', Start: 2000, End: 2011 },
    { name: 'Company Four', Category: 'Whole Sale', Start: 1985, End: 2019 },
    { name: 'Company Five', Category: 'Finnance', Start: 2000, End: 2024 },
    { name: 'Company Six', Category: 'Fashion', Start: 2022, End: "Nill" },
    { name: 'Company Seven', Category: 'Retail', Start: 2000, End: "Till Date" },
];
//Companies that their end dates are unknonw
const Retail = companies.filter (function (companies) {
   return companies.End === 'Nill'
})
console.log(Retail);

//Companies that stated after 
const earlyCompanies = companies.filter(
    (companies) => companies.Start >= 1990
);
console.log(earlyCompanies);

const olderCompanies = companies.filter(
    (companies) => companies.Start < 2000 && companies.End >= 2000
);
console.log(olderCompanies)


//Array.map
const num = [1, 2, 3, 4, 5]
const doubledNum = num.map((num)=>num * 2)
console.log(doubledNum);*/

/*const companies = [
    { name: 'Company one', Category: 'Finnance', Start: 1995, End: 2001 },
    { name: 'Company Two', Category: 'Auto', Start: 1990, End: 2009 },
    { name: 'Company Three', Category: 'Finnance', Start: 2000, End: 2011 },
    { name: 'Company Four', Category: 'Whole Sale', Start: 1985, End: 2019 },
    { name: 'Company Five', Category: 'Finnance', Start: 2000, End: 2024 },
    { name: 'Company Six', Category: 'Fashion', Start: 2022, End: "Nill" },
    { name: 'Company Seven', Category: 'Retail', Start: 2000, End: "Till Date" },
]

//Array.reduce
//this is used to reduce ur array to a single value, the previous value or accumulator is a result of the last callback of the function, while the current value is what were currently on nd the initial value is what we r doing currently.
const numbers = [1, 2, 3, 4, 5] 
//this exaple shows how to get the sum of a value. the initial value is normally set to zero 
const sum = numbers.reduce(function (accummulator, currentValue) {
    return accummulator + currentValue;
}, 0);
//also  note that when the value changes from 0 to another it just starts from the number
const sum2 = numbers.reduce((acc, cur) => acc + cur, 8);
console.log(sum2);


const cart = [
    { id: 1, name: 'product 1', price: 150 },
    { id: 2, name: 'product 2', price: 200 },
    { id: 3, name: 'product 3', price: 250 },
];
// when reducing with objects always remeber to use the ('.' dot notation there) this method is mostly used in shopping carts
const sumPrice = cart.reduce((acc, product) => acc + product.price, 200);
console.log(sumPrice);

//CHALLENGES

//NUM 1
//Take the people array and create an array called youngPeople that shows objects with only name and email properties that are 25 and under. the name property should have the first and last name. 

const people = [
    {
        Name: {
            firstName: 'James',
            lastName: 'Calson'
        },
        Email: 'Jamescall@gmail.com',
        Phone: '906-655-4434',
        Age: 30
    },
    {
        Name: {
            firstName: 'Emmanuel',
            lastName: 'Chrolo'
        },
        Email: 'ChroloEm@gmail.com',
        Phone: '906-633-5534',
        Age: 25
    },
    {
        Name: {
            firstName: 'Jason',
            lastName: 'Drey'
        },
        Email: 'JasonDrey@gmail.com',
        Phone: '905-343-3333',
        Age: 20
    },
    {
        Name: {
            firstName: 'Constance',
            lastName: 'Cameron'
        },
        Email: 'ConsCam@gmail.com',
        Phone: '906-655-4434',
        Age: 22
    },
    {
        Name: {
            firstName: 'Sun',
            lastName: 'Wukon'
        },
        Email: 'WukongSu@gmail.com',
        Phone: '906-655-4434',
        Age: 24
    }
]
// this project required the use of filter and map method of arrays. to make your code clearer learn to organize it better. 
const youngPeople = people
    .filter((people) => people.Age <= 25)
    .map((people) => [people.Name, people.Email])
console.log(youngPeople);


//NUM 2
//Add all of the positive numbers in the array
// this project required the use of both the filter and the reduce method. the filter was used to select the needed values while the reduce was used to sum up all the values
const positiveNum = [1, -2, 3, -34, 56, -78, 97, -54]
const total = positiveNum
    .filter((positiveNum) => positiveNum > 0)
    .reduce((acc, cur) => acc + cur, 0)
console.log(total);

//NUM 3
//Create a new array called capitalizedWords with the words from the array with the first letter of each word capitalized
//the project made use of both string and array methods to produce our solution. the toUpperCase and Slice methods were used to convert the laters to uppercase while also starting selecting the values from each array, the number zero in the word was used to specify where to start from in the process of capitalizing.  
const words = ['cedar', 'nightingle', 'roses']
const capitalizedWords = words.map((words) => words[0].toUpperCase() + words.slice(1))
console.log(capitalizedWords);*/


//DOM























