/* creates a p element */
let red = document.createElement('p');

/* writes out the text within the p element */
red.textContent = "Hello World!";
/* colors the p tag */
red.style.color = 'red';       
/* adds it to the body */
document.body.appendChild(red);

let blue = document.createElement('h3')
blue.textContent =  'I\'m a blue h3!';
blue.style.color = 'blue';
document.body.appendChild(blue);

let pinkBG = document.createElement('div');
pinkBG.setAttribute('style', 'color: black; background: pink; border: 5px solid black; text-align: center;');    
document.body.appendChild(pinkBG);

let inADiv = document.createElement('h1');
inADiv.textContent =  'I\'m a div!';
pinkBG.appendChild(inADiv);

let meToo=document.createElement('p');
meToo.textContent = "ME TOO!"
pinkBG.appendChild(meToo);