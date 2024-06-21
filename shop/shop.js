//the all property is used as an array (its used to show the information on everything on the DOM of the page we can acces elemts by index just as we use them in arrays.remeber this property is a deprecated version)

/*output = document.all;
output = document.documentElement;*/

//the document property is used to display the properties of DOM, its used to display the html collection of the code.

/*output = document.head;
output = document.body;
output = document.head.children;*/

//remeber that when working with a form it must have an 'id' tag, we can also it methods(this serves the position of showing how the data is gotten) as well as actions (this is where the form will submit the form)

/*output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;*/

// we can manipulate the data of the websites using the basic methods.
//output = document.forms[0].method;

//this is used to help us get any element of our  html code by its Id,if we r to look for specific attributes we use the Id property tho, it doesnt work on all elements  

//document.getElementById()
console.log(document.getElementById('app title'));

//document.getAttribute
//this method lets us attach to the getElementById while letting us search for the specific attribute we want. 
document.getElementById('app title').getAttribute('id')

//Set Attribute
//in cases where want to set attributes  we use the setAttribute method to get the attribute we are looking to set.
document.getElementById('app title').setAttribute('class','title')


//Get/Change content
// when we use the getElementById we r using it either to get a particular element in our html or we inted to change the value of an atrribute.

const title = document.getElementById('app title')
//the textContetnt here is used to dipslay the text in out html code on our console.
console.log(title.textContent);
title.textContent = 'New Dawn'
title.innerText = 'Hello World'
title.innerHTML = '<strong>Shopping List</strong>';


//Change Style
//We can change our CSS style through our javascript too (thisnis done through the use of the style attribute, while also using the dot notation for selecting the type of style to be changed.)
//here what changes is the color of the title as thats what was specified to be changed.
//Using Js to change styles is mostly used when we are trying to make our page look dynamic.

title.style.color = 'green';
title.style.backgroundColor = 'gold';
title.style.padding = '10px';
title.style.borderRadius = '10px';

//Note that you have full control of ur interface on javascript through the DOM.


//document.querrySelector()
//this literlly lets us to select anything within the CSS of our page, this means all the css atributes are also included.
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app title'));
console.log(document.querySelector('.container'));

//remeber to always add the document.querrySelector() if we want to select anything in our css nd change them as we wish.
const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Bananas';
secondItem.style.color = 'crimson';


//Use these methods on other elements

const list = document.querySelector('ul')
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'green'

//DOM - Selecting Multiple Elements

//querrySelectorAll()
//this method is used to get multiple elements of our css. this method can be used in all means of getting data from either the HTML or CSS of our code, nd its best preffered to use than the examples provided below. 

const listItems = document.querySelectorAll('.item');
console.log(listItems[1].innerText);

//this give us a node list which is like a an array. there r certain diffrences too in the node list (- you can use high order array methods but in the html collection you need to  convert it to an array first, also npte that you cant acces the style attribute on the node list as its meant to select only one item (in the example we had to choose the one we wanted to work on))

//listItems[1].style.color = 'blue'

//but if you want to change all the items, then you can make use of the for each loop
//note when we are working with the html we should always put into consideration all the properties of the html code.

// listItems.forEach((item, index) => {
//     item.style.color = 'crimson'

//     if (index === 1) {
//         item.remove();
//     }

//     if (index === 0) {
//         item.innerHTML = ` Apples
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`
//     }
// });

//this method lets us use the forEach condition in a HTML collection
// const listItems2 = document.getElementsByClassName('item')
// //the first thing to do b4 using the forEach in a HTML collector is to convert it first to an Array.
// const listItemsArray = Array.from(listItems2);
// listItemsArray.forEach((items) => {
//     console.log(items.innerText);
// });

// // getElementByTagName
// //this method lets us get the selected HTML Item by the assigned tag name. it also provides us with a HTML collection which leads us to the need for converting them to an array before we can use the forEach method.
// const listItems3 = document.getElementsByTagName('li')
// console.log(listItems3[2].innerText);


//Traversing the DOM 
























