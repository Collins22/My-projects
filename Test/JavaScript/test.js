
// Project one
// Write a code that prints hello world on the console

let name = 'Hello World !';
console.log(name);

// project Two
// create a program that declares and uses variables of diffrent data types

let Bio = 'Collins';
let Age = 24;
let Info = `My is ${Bio} and I am ${Age} and i syudied in the university for`;
let Uniyrs = [1, 2, 3, 4, 5];
let noreply = null;
let Personsdata = {
    Tile: 'Mr Collins Blaze',
    Status: 'Single',
    Employment: 'Student',
}
let Result = true;
console.log(Info, Uniyrs, noreply, Personsdata, Result);

// Project Three
// Create a program that uses control structures to perform simple tasks

let Study = "Surveying and Geoinfromatics"
let Story = `I studied ${Study} in the University and i have no idea whether it will be of help in the future or not. I leave it to the future and God to decide what it's gonna be, hope it ends up being wonderfull and usefull.`
console.log(Story);
let Courseofstudy = 'Surveying and Geoinformatics'; 
if (Courseofstudy == 'Usefull') {
    console.log('Wasted years');
} else {
    console.log('Thank God');
} if (Courseofstudy !== 'Useless') {
    console.log('Was a great experience');
} else {
    console.log("Wow that quiet the ride.");
}

// Project Four
// Create a program and defines a simple function


const Sponsor = getSponsor('Mr Stephen Nwosu');
function getSponsor() {
    return `I would love to thank, ${getSponsor} for always been their and also sponsoring me through my school days.`;
}
console.log(Sponsor);

// Project Five
// Create a program that manipulates an array

let meals = ['Soup', ' Noodles', ' Rice', ' Spagheti'];
meals.push(' sometimes we also take', 'fruits');
let love = `During my days these were the most commonly made meals available ${meals}.`;
console.log(love)


