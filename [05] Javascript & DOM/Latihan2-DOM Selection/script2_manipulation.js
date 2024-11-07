/* DOM Manipulation */

// element.innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Fadhlillah</em>';

// const sectionA =document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>paragraf1</p></div>';

// element.style.<properties>
// const judul = document.querySelector('#judul');

// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// element.setAttribute() atau element.getAttribute() atau element.removeAttribute()
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute ('name', 'Fadhlillah');

// const a = document.querySelector('section#a a');

// element.classlist()
// const p2 = document.querySelector('.p2');
// p2.classList.add('label');

// Buat Elemen Baru
const pBaru = document.createElement ('p');
const teksPBaru = document.createTextNode ('Paragraf Baru');
// Simpan Tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
// Simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


// Buat Elemen Baru
const liBaru = document.createElement ('li');
const textLiBaru = document.createTextNode ('Item Baru')
// Simpan Tulisan ke dalam Paragraf
liBaru.appendChild(textLiBaru);
// Simpan liBaru di tengah-tengah li
const ul = document.querySelector('#b ul');
const li2 = document.querySelector('#b ul li:nth-child(2)');
ul.insertBefore(liBaru,li2);


//Tangkap Element
const link = document.getElementsByTagName ('a')[0];
//hapus
sectionA.removeChild(link);

//Tangkap Parent
const sectionB = document.getElementById ('b');
const p4 = sectionB.querySelector ('p');
//Element Baru
const h2Baru = document.createElement ('h2');
const teksH2Baru = document.createTextNode ('Judul Baru');
//Masukan teks ke dalam h2
h2Baru.appendChild(teksH2Baru);
//replace
sectionB.replaceChild(h2Baru,p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';