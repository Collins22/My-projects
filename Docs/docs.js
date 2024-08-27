//DOM
//the DOM is a programming interface for web/HTML elements, it also structures that we can understand to interact with javascript, also includes tags, attributes, text nodes, etc and its represngted by a tree.
//console.dir(window.document);
//console.log(document.body.innerHTML);
//console.log(document.links[0]);


//document.body.innerHTML = '<h1>Hello World<h1>'; - (this method is used to add text to our html code from javascript)
//document.write('Hello from Collins') - (this methods is not really  recommended as it doesnt have a particular area to appear(i mean lack of a target))
// getElemenById is used to select certain elements in the DOM
//console.log(document.getElementById('lists'));
//const main = (document.getElementById('lists'));
//main.innerHTML = '<h1>HELLLO FROM COLLINS</h1>';


//Traversing The DOM, any html tag on the page is an Element
//DOM Element Relationship
// The relationship is divoided into the firstElementChild to the lastElementChild, which moves from the nextElementSibling to the previousElementSibling.

//Get child elements
// let output;
// const parent = document.querySelector('.parent');
// //the .children is a type of method used to get the information of the children property of the parent.

// output = parent.children[1].nodeName;
// output = parent.children[1].className;
// output = parent.children[1].innerText;

// output = parent.children[1].innerText = 'Child Two'
// output = parent.firstElementChild.innerText = 'Child Four'

// parent.lastElementChild.innerText = 'Child Six'
// //Get parent element from the child

// const child = document.querySelector('.child');
// //the .parentElement is used to reach the parent element through the child element.
// output = child.parentElement;
// child.parentElement.style.border = '6px solid #ccc';
// child.parentElement.style.padding = '10px solid #ccc';
// console.log(output);


// //get siblingElement

// const SecondItem = document.querySelector('.child:nth-child(2)');
// output = SecondItem;
// output = SecondItem.nextElementSibling;
// output = SecondItem.nextElementSibling.style.color = 'green';
// output = SecondItem.previousElementSibling.style.color = 'orange';
// console.log(output);


// DOM Node Types
//The Node relationships are a little diffrent from the Element relationship as they lake the tag of element when writing their methods. The diffrence between each of them is that one is used for only the nodes while the other is used for only the element.

// let output;
// const parent = document.querySelector('.parent')
// output = parent.childNodes;
// output = parent.childNodes[0].textContent;
// output = parent.childNodes[0].nodeName;
// //
// output = parent.childNodes[3].textContent;
// output = parent.childNodes[3].nodeName;
// output = parent.childNodes[3].outerHTML;
// //Note: White Space serves as Text
// output = parent.childNodes[3].innerHTML = 'Child One';
// output = parent.childNodes[5].style.color = 'Crimson';

// output = parent.firstChild;
// output = parent.lastChild;

// parent.lastChild.textContent = 'Hello';

  
// //Parent node

// const child = document.querySelector('.child');
// output = child.parentNode;

// child.parentNode.style.backgroundColor = '#ccc';
// child.parentNode.style.padding = '10px';

// //Sibling

// const SecondItem = document.querySelector('.child:nth-child(2)')
// output = SecondItem.nextSibling;
// output = SecondItem.previousSibling;

// console.log(output);



//Create & Append Elements

// const div = document.createElement('div');
// div.className = 'My-Element';
// div.id = 'My-Element'
// div.setAttribute('title', 'My-Element');

// ///div.innerText = 'Hello World';

// const text = document.createTextNode('Hello World');
// div.appendChild(text);

// //the appendChild method lets us append a child element either to an element or a txt node. (lets us add child attribute)

// document.body.appendChild(div);
// document.querySelector('ul').appendChild(div);


//CHALLENGE

//ADD AN EXTRA ELEMENT TO THIS PAGE

//in this example we used the function then created a constant that is used to create a new element inside out li, then did the same for the button and the icon, after that we append our item using the the appendChild together with the documennt.createTextNode to create a node item for our new item. then we create the class name for our button, doing same to the icon, then append the button to the li. finally using the querrySelector to select where we want the new item to be added, then append the const to it.

// function createNewItem(item) {
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(item));

//     const button = document.createElement('button');
//     button.className = 'remove-item btn-link text-red';

//     const icon = document.createElement('i');
//     icon.className = 'fa-solid fa-xmark';

//     button.appendChild(icon);
//     li.appendChild(button);
    
//     document.querySelector('.items').appendChild(li)
// }

// createNewItem('Rice');
// createNewItem('Beans');


//Inserting text, Elements in our html

//insertAdjacent Element (used for inserting elements in our html if its a JSON)

// function insertElement() {
//     const filter = document.querySelector('.filter');

//     const h1 = document.createElement('h1');
//     h1.textContent = 'insertAdjacentElement';
    
//     filter.insertAdjacentElement('afterBegin', h1);
// }


// //insertAdjacentText (Used to insert text to out code if its a JSON)

// function insertText() {
//     const item = document.querySelector('li:first-child');
    
//     item.insertAdjacentText('afterend', 'insertAdjacentText');
// }


// //insertAdjacentHTML (used to insert HTML if its a JSON)

// function insertHTML() {
//     const clearBtn = document.querySelector('#clear');

//     clearBtn.insertAdjacentHTML('beforeend', '<h2>Lets cook</h2>');
// }


// insertElement();
// insertText();
// insertHTML();

//(in general the above takes in a position using the methods below)

/*
=> this will go above the paragraph
<!--beforebegin-->  
<p>
=> this will be directly above the all the contents
   <!--afterbegin-->
    foo
=> after the content but still within the paragraph
    <!--beforeend-->
</p>
=> this will be directly after the after the paragraph
    <!--afterend-->  
 */



//Replace Elements

// function firstItem() {
//     const firstItem = document.querySelector('li');

//     firstItem.textContent = 'Tea & Bread';
//     firstItem.replaceWith(firstItem);
// }

// function secondItem() {
//     const secondItem = document.querySelector('li:nth-child(2)');

//     secondItem.outerHTML = '<li>Fried Rice</li>';
// }

// function replaceAll() {
//     const lis = document.querySelectorAll('li');
//     lis.forEach((item, index) => {
//         item.innerHTML = 'Foods'
//     })
// }


// firstItem();
// secondItem();
// replaceAll();



//Events: actions that happen in the system your working on so you can know when your taking an action on it. note its not recommended to place ur event listenners inout html.

// learn to create your variable with specific methods you want to use for the code.

//Num1

//const clearBtn = document.querySelector('#clear');
// always create a function that will direct the program on what you want it to perform.

// const clearBtn = document.querySelector('#clear');
// function onClear() {
//     const itemList = document.querySelector('ul');

//     itemList.innerHTML = '';
// };

// clearBtn.addEventListener('click', onClear);
//always remeber to add your event listeners if you want the event to work.


//Num2

// you can also use the querrySelector all with the specific class tag and the forEach loop together with the remove method.

// const clearBtn = document.querySelector('#clear');
// function onClear() {
//     const itemList = document.querySelector('ul');
//     const item = itemList.querySelectorAll('li');

// // remeber to always place our parameter when we are working with a loop.
//     item.forEach((item) => item.remove());
// //    itemList.innerHTML = '';
// };
// clearBtn.addEventListener('click', onClear);


//  function onClear() {
//     alert('Clear Items')
//  }

//  clearBtn.onclick = function () {
//      alert('Clear items');
//  }
// //  clearBtn.onclick = function () {
// //      alert('Clear items');
// //  }

// //add event listener

// //clearBtn.addEventListener('click', () => alert('Clear Items'));

// clearBtn.addEventListener('click', onClear);

// //setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);




//Mouse Events
// to get ure event to work alwways learn to pick and specify where you want the event to happen using rhe querrySelector.
// const logo = document.querySelector('img');

// const onClick = () => console.log('click event');
// const onDoubleClick = () => {
//     //    document.body.style.backgroundColor = 'purple';

//     if (document.body.style.backgroundColor !== 'purple') {
//         document.body.style.backgroundColor = 'purple';
//         document.body.style.Color = 'white';
//     } else {
//         document.body.style.backgroundColor = 'white';
//         document.body.style.Color = 'black';
//     }
// };

// const onRightClick = () => console.log('right click event');
// const onMouseDown = () => console.log('our mouse is down');
// const onMouseWheel = () => console.log('we wheeling our mouse');
// const onMouseOver = () => console.log('mouse hovering');
// const onMouseOut = () => console.log('mouse is out of range');
// const onDragStart = () => console.log('Drag the mouse');
// const onDragEnd = () => console.log('Drag has ended');

// //Event listeners
// //note to always use a comma to seperate ur commands.

// //used when we are clickcing
// logo.addEventListener('click', onClick);

// //used when we want to double click
// logo.addEventListener('dblclick', onDoubleClick);

// //note to right click you need to set the context menu as thast what is used to repersent rightclick.
// logo.addEventListener('contextmenu', onRightClick);

// //the onMouseDown is used whenyou left click on the wanted area and move it around(this is used when the mouse goes down. nd rhe same goes for mouse up).
// logo.addEventListener('mousedown', onMouseDown);

// //this works when we are using an actual mouse.
// logo.addEventListener('wheel', onMouseWheel);

// // this is used when our mouse is hovering on a particular, the opposite  is mouseout.
// logo.addEventListener('mouseover', onMouseOver);
// logo.addEventListener('mouseout', onMouseOut);

// //this event starts and ends the drag
// logo.addEventListener('dragstart', onDragStart);
// logo.addEventListener('dragend', onDragEnd);


//Object Event


/*
- `target` = element tht trigerred the event.
- `current target` = element that the eent listener is attached to
- `type = type of event that was triggered`
- `timestamp` = time that event was triggered
- `clientX` = X position of the mouse click relative to the window 
- `clientY` = Y position of the mouse click relative to the window 
- `offsetX` = X position of the mouse click rel to the element
- `offsetY` = Y position of the mouse click rel to the element
- `pageX` = X position of mouse click rel to the page
- `pageY` = Y position of mouse click rel to the page
- `screenX` = X position of mouse click rel to the screen
- `screenY` = Y position of mouse click rel to the screen
*/
// the preventDefault lets us prevent us from acting on the default. its used either with forms our links.
// const logo = document.querySelector('img');
// logo.addEventListener('click', function (e) {
//     console.log(e.screenX);
// });


//Keyboard Events

const itemInput = document.getElementById('item-input');
const onKeyPress = e => console.log('when we click on the keyboard');
const onKeyUp = e => { console.log('pick') };
const onKeyDown = e => {console.log('select')};

//itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown)

// there r various methods to verify the type of key thats selected. these methods include: Key, KeyCode, Code.
// the is used together with the specified key to help tell the type of key thats being pressed, its mostly used in gamed development and in options where theres a need to find out the type of key thats been selected.
//Key: this is used to pick the selected key.
//KeyCode: this is usd to show the code assigned to the key
// Code: this is the code for the key


//Input Events

/*
- onChecked = this is used when you are checking if ur input has been cheked(used on check boxes)
- onInput = used when we are putting an input in our forms
- onFocus = used when your clicking inside ur input field(mostly used on forms)
- onBlur = used when your clicking outside your input field(mostly used on forms) 
*/

/* 
 => Form Submission: this is where we want our form to be submitted.

- onSubmit: this method lets tell the form how to submit its data.
- .get: this is used to the values of the form that are submitted.
- .entries: this is used to get the entries in the form.
*/

/* 
=> Event bubbling: this is an event thats used to move the action for that event to the first part.  


=> Event Delegation: this is a method of addinge event handlers to lots of events. 

=> Page loading and Window Events: 

when you put your script tag in the head it wwont run as it means that we r running our Js before the code. but this problem can be solverd through the use of window.onLoad or we could an an event listerner to the window and add load as the event. we could also solve it by using the DOMContent Loaded. which loads all the documents after they have been parsed. we could also use the defer attribute that will let usrun the javascript after the code was loaded and it should be added to the script in our html(when its added to the top.)

- resize: this event is used to check the size of our screen
- scrol: this is used to show where we are sccrolling on the screen, it can be used when we want to give an option for our navigation.
- focus: this events lets us set up when we click on the window
- blur: this events lets us set up when we want to click out of the window.




















































