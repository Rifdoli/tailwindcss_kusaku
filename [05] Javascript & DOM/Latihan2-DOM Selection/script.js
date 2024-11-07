// DOM Selection
// document.getElementById() --> Element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Fadhlillah';

// documents.getElementByTagName() --> HTML Collection
const p = document.getElementsByTagName('p');

for(let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '20px';


// documents.getElementByClassName() --> HTML Collection

const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah dari js';