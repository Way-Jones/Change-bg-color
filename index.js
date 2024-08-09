//these two lines of code are used to get the refernces to the body and botton elements
const body = document.querySelector('body');
const button = document.querySelector('button');

// this code is to get the array of colors to be used in the page
const colors = ['violet','red','green','blue','black','white','yellow'];

// this code is to set the initial background color
body.style.backgroundColor = 'violet';

// this code is to set what happens when the button is clicked 
button.addEventListener('click',function(){

// this code makes the color shown on the page to be random
const colorIndex = parseInt(Math.random()*colors.length);
 
// this code is to make the background randomly select color
body.style.backgroundColor = colors[colorIndex];
});
