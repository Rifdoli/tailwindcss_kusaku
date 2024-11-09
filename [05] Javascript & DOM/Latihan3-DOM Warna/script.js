const btn = document.getElementById ('button');
btn.onclick = function (){
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class','biru-muda');
    document.body.classList.toggle('biru-muda');
}

// Buat elemen button
const btnBaru = document.createElement('button');
const textBtnBaru = document.createTextNode('Acak Warna');
btnBaru.appendChild(textBtnBaru);
btnBaru.setAttribute('type', 'button');
btnBaru.setAttribute('id','button_1');

btn.after(btnBaru);

btnBaru.addEventListener('click',function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})

const range = document.querySelectorAll('input');
range.forEach(function(input){
    input.setAttribute('min', '0');
    input.setAttribute('max', '255');
});

for(let i = 0; i<range.length; i++){
    range[i].addEventListener('input',function(){
        const r = range[0].value;
        const g = range[1].value;
        const b = range[2].value;

        console.log (r);
        console.log (g);
        console.log (b);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    })
}


document.body.addEventListener('mousemove',function(event){
    //posisi mouse
    // console.log(event.clientX);
    // ukuran browser
    // console.log(window.innerWidth);
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
})

