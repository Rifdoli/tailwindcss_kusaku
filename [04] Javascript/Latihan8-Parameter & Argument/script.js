/* function tambah(a,b) {
    return a+b;
}

function kali(a,b) {
    return a*b;
}

var hasil;
hasil = kali(tambah(1,2),tambah(3,4));
console.log(hasil); */

function tambah(){
    var hasil = 0;
    for( var i = 0; i < arguments.length; i ++){
        hasil += arguments[i];
    }
    return hasil;
}

var coba;
coba = tambah (1,2,3);
console.log(coba);