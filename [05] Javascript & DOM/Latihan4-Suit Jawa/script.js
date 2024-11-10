// var tanya = true;
// while(tanya){
//     // menangkap pilihan player
//     var p = prompt ('Silahkan Pilih: Gajah, Semut atau Orang');

//     // menangkap pilihan dari komputer

//     // menentukan bilangan random
//     var comp = Math.random();

//     if(comp < 0.34){
//         comp = 'Gajah'
//     }else if(comp >= 0.34 && comp < 0.67){
//         comp = 'Orang'
//     }else{
//         comp = 'Semut'
//     }

//     // menentukan rules
//     var hasil = '';

//     if(p == comp){
//         hasil = 'SERI'
//     } else if(p == 'Gajah'){
//         // if(comp == Orang){
//         //     hasil = 'MENANG'
//         // }else{
//         //     hasil = 'KALAH'
//         // }
//         hasil = (comp == 'Orang') ? 'MENANG' : 'KALAH';
//     } else if(p == 'Orang'){
//         hasil = (comp == 'Semut') ? 'MENANG' : 'KALAH';
//     } else if(p == 'Semut'){
//         hasil = (comp == 'Gajah') ? 'MENANG' : 'KALAH';
//     } else {
//         hasil = 'Anda memasukan pillihan yang salah';
//     }

//     // tampilkan hasilnya
//     alert('Kamu memilih : '+p+' dan komputer memilih : '+comp+'\nMaka hasilnya : Kamu '+hasil);

//     tanya = confirm ('lagi?');

// }

// alert('Terima Kasih');

// Fungsi Pilihan Komputer
function getPilihanComputer (){
    const comp = Math.random();
    if(comp < 0.34) return 'gajah';
    if(comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

// Fungsi Rules Hasil
function getHasil(player, comp){
    if(player == comp) return'SERI';
    if(player == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH';
    if(player == 'orang') return (comp == 'semut') ? 'MENANG' : 'KALAH';
    if(player == 'semut') return (comp == 'gajah') ? 'MENANG' : 'KALAH';
    return 'Anda memasukan pillihan yang salah';
}

function putarGambar (){
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah','semut','orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();

    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        };
        imgComputer.setAttribute('src','img/' + gambar[i++] + '.png');
        if (i == gambar.length) return i = 0;
    },100)
} 


const pilihanGambar =document.querySelectorAll('li img');
pilihanGambar.forEach(function(pilihan){
    pilihan.addEventListener('click',function(){
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pilihan.className;
        const hasil = getHasil(pilihanPlayer,pilihanComputer);

        putarGambar();

        setTimeout(function(){
            // Ganti gambar computer
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src','img/' + pilihanComputer + '.png');

            // Tampilkan Hasil pada layar Info
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        },1000);
  
    })
})


// // Ambil Pilihan Player Gajah
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanPlayer,pilihanComputer);

//     // Ganti gambar computer
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src','img/' + pilihanComputer + '.png');

//     // Tampilkan Hasil pada layar Info
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })

// // Ambil Pilihan Player Orang
// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanPlayer,pilihanComputer);

//     // Ganti gambar computer
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src','img/' + pilihanComputer + '.png');

//     // Tampilkan Hasil pada layar Info
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })

// // Ambil Pilihan Player Semut
// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanPlayer,pilihanComputer);

//     // Ganti gambar computer
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src','img/' + pilihanComputer + '.png');

//     // Tampilkan Hasil pada layar Info
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })



