console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// REQUIRED: Create global variable named basket and set it to an empty array
let basket = [];

// STRETCH: Add a global const named maxItems and set it to 5.
const maxItems = 5;

// REQUIRED: Create a function called addItem. It should:
// take an input parameter for a string item
// add the new item to the global array basket.
// return true indicating the item was added

// STRETCH: Update the required addItem function to:
// Use the isFull function to prevent more than maxItems from being added to the basket.
// If an item was added to the array, return true
// If there was no room and the item could not be added return false

function addItem(item) {
  //console.log('in addItem:', item);
  if(typeof item === 'string') {
    if(isFull() === false) {
      console.log(`in isFull and the basket is not full: ${basket}. ${item} will be added.`);
      basket.push(item);
      return true;
    }
    else {
      console.log(`in isFull and the basket is full: ${basket}. ${item} could not be added.`);
      return false;
    }
  }
  else {
    console.log('Please use a string in addItem')
  }
}
console.log('testing with a number parameter:', addItem(2));

console.log('adding apples, expect true:', addItem('apples'));
console.log('adding bread, expect true:', addItem('bread'));
console.log('adding milk, expect true:', addItem('milk'));
console.log('adding cheese, expect true:', addItem('cheese'));
console.log('adding cookies, expect true:', addItem('cookies'));

console.log('adding ice cream, expect false:', addItem('ice cream'));

// REQUIRED: Create a function called listItems. It should:
// loop over the items in the basket array
// console.log each individual item on a new line
function listItems() {
  //console.log('in listItems:');
  for(let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
  }
}
listItems(basket);

// REQUIRED: Create a function called empty. It should:
// reset the basket to an empty array
function empty() {
  //console.log('in empty:');
  basket = [];
}

empty();
console.log('The basket after calling empty() is now (expecting an empty array):', basket);

// STRETCH: Create a function called isFull(). It should:
// return false if the basket contains less than max number of items
// return true otherwise (equal or more than maxItems)
function isFull() {
  //console.log('in isFull:');
  if(basket.length < maxItems) {
    return false;
  }
  else {
    return true;
  }
}
// testing false situations
console.log('running isFull with an empty basket, expecting false:', isFull()); // false

addItem('pasta');
addItem('pasta sauce');
addItem('garlic');
addItem('meatballs');
console.log('running isFull with 4 items in basket, expecting false:', isFull()); // false

// testing true situations
addItem('basil');
console.log('running isFull with 5 items in basket, expecting true:', isFull()); // true

addItem('parmesean');
console.log('running isFull trying to add a 6th item in basket, expecting true:', isFull()); //true 
console.log(basket);

// Create a function called removeItem. It should:
// Take an input parameter for a string item
// Use Array.indexOf to find the index of the first matching item in the basket.
// Use Array.splice to remove the first matching item from the basket.
// Return the item removed or null if the item was not found

function removeItem(itemToRemove){
  if(typeof itemToRemove === 'string') {
    let indexedItem = basket.indexOf(itemToRemove);
    console.log(indexedItem); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf. returns -1 if item is not found
    if(indexedItem >= 0) { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice. when using splice, -1 is the same as the array.length-1 aka the last item in the array
      basket.splice(indexedItem,1);
      return itemToRemove;
    }
    else {
      return null;
    }
  }
  else {
    console.log('Please use a string in removeItem');
  }
}
// testing removeItem
console.log(`The basket is: ${basket}`);
console.log('The removed item from removeItem is (expecting pasta sauce):',removeItem('pasta sauce'));
console.log(`The basket is: ${basket}`);
console.log('The removed item from removeItem is (expecting null):', removeItem('chips'));
console.log(`The basket is: ${basket}`);

console.log('testing with a number parameter:', removeItem(2));