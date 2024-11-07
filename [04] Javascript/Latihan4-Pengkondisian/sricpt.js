
// If, Else IF dan Else //

/* 
var angka = prompt ('Masukan Angka');

if (angka % 2 == 0){
    alert(angka + ' adalah bilangan GENAP');
}

else {
    alert(angka + ' adalah bilangan GANJIL');
}
*/

/*
var angka = parseInt (prompt('masukan angka :')); // prseInt bertujuan untuk mengubah nilai inputan yang STRING menjadi INTERGER

if(angka === 1){
    alert('anda memasukan angka 1');
} else if(angka === 2){
    alert('anda memasukan angka 1');
} else if(angka === 3){
    alert('anda memasukan angka 3');
} else {
    alert('angka yang anda masukan salah!')
}
*/


// Switch dan Default //
/*
var angka = parseInt (prompt('Masukan Angka:'));

switch(angka){
    case 1: // case harus nilai atau ekspresi, tidak dapat memberikan kondisi, cth >= 10 (TIDAK BISA)
        alert('Anda memasukan angka 1');
        break;
    case 2:
        alert('Anda memasukan angka 2');
        break;
    case 3:
        alert('Anda memasukan angka 3');
        break;
    default:
        alert('Angka yang anda masukan salah!');
        break;
}
*/

/*
var item = prompt('Masukan nama makanan/minuman : \n (cth: nasi, daging, susu, burger dan softdrink');

switch(item){
    case 'nasi':
        alert('Makanan/minuman SEHAT!');
        break;
    case 'daging':
        alert('Makanan/minuman SEHAT!');
        break;
    case 'susu':
        alert('Makanan/minuman SEHAT!');
        break;
    case 'burger':
        alert('Makanan/minuman TIDAK SEHAT!');
        break;
    case 'softdrink':
        alert('Makanan/minuman TIDAK SEHAT!');
        break;
    default:
        alert('Anda memasukan makanan/minuman yang salah');
        break;
}
*/

var item = prompt('Masukan nama makanan/minuman : \n (cth: nasi, daging, susu, burger dan softdrink');

switch(item){
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('Makanan/minuman SEHAT!');
        break;
    case 'burger':
    case 'softdrink':
        alert('Makanan/minuman TIDAK SEHAT!');
        break;
    default:
        alert('Anda memasukan makanan/minuman yang salah');
        break;
}


