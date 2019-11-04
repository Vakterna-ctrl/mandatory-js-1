//fixar titeln
let title = document.querySelector('title');
title.textContent = 'Fruits & Vegetables Corp';
//döper om till Fruits & Vegetables Corp
let h1 = document.querySelector('h1');
h1.textContent = 'Fruits & Vegetables Corp';
//byter namn från bannas till vegetables
let bananas = document.querySelector("a[href='#bananas']");
bananas.textContent = 'Vegetables';
bananas.setAttribute('href', '#Vegetables')
//wrappa texten med p tagg
let wrapText = document.querySelector('#about');
wrapText.textContent = '';
let pNewText = document.createElement('p');
pNewText.textContent = 'We\'re the best in fruits & vegetables'
wrapText.appendChild(pNewText);

let contact = document.querySelector('#about');
contact.setAttribute('id', 'contact');

let about = document.querySelector('#contact');
about.setAttribute('id', 'about');

let  h2about= document.createElement('h2');
h2about.textContent = 'About';
about.appendChild(h2about);

let h2contact= document.createElement('h2');
h2contact.textContent = 'Contact';
contact.appendChild(h2contact);

let contactUs = document.querySelector('#about > p')
contact.appendChild(contactUs);
let table = document.querySelector('table');
contact.appendChild(table);
//gör om td till th
let thead = document.querySelector('thead tr');
let td = document.querySelectorAll('thead td');
for (var i = 0; i < td.length; i++) {
  thead.removeChild(td[i]);
}
let th1 = document.createElement('th');
let th2 = document.createElement('th');
thead.appendChild(th1).textContent = 'Name';
thead.appendChild(th2).textContent = 'Email';

//lägger in css i headern
let head = document.querySelector('head');
let stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.type = 'text/css';
stylesheet.href = 'main.css';
head.appendChild(stylesheet);
