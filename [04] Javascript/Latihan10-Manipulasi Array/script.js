//Manipulasi Array

/* // 1. Menambah Isi Array

var arr = []
arr[0] = "Rifqi";
arr[1] = "Fahd";
arr[2] = "Noval";

console.log(arr); */

/* // 2. Menghapus Isi Array

var arr = ["Rifqi", "Fadh", "Noval"]
arr[1] = undefined;

console.log(arr); */

/* // 3. Menampilkan Isi Array
var arr = ["Rifqi", "Fadh", "Noval", "Wawan"];

for(var i = 0; i < arr.length; i++){
    console.log('Mahasiswa Ke-'+ (i+1) + ' : ' + arr[i]);
} */

// 4. Method Pada Array
/* // 1. Join --> Mengubah isi Array menjadi string
var arr = ["Rifqi", "Fadh", "Noval"];
console.log(arr.join(' - ')); */

// 2. Push dan Pop
/* var arr = ["Rifqi", "Fadh", "Noval", "Wawan"];

arr.push('Doddy');
arr.pop();
arr.pop();
console.log(arr.join(' - ')); */

/* // 3. Unshift dan Shift
var arr = ["Rifqi", "Fadh", "Noval", "Wawan"];

// arr.unshift('Doddy');
arr.shift();
console.log(arr.join(' - ')); */

/* // 4. Splice
var arr = ["Rifqi", "Fadh", "Noval"];
// splice(indexawal, mauDihapusBerapa, elemenBaru1, elemenBaru2,...)
arr.splice(2, 2, 'Doddy','Fitri');
console.log(arr.join(' - ')); */

/* // 5. Slice
// slice(awal, akhir);
var arr = ["Rifqi", "Fadh", "Noval", "Wawan", "Doddy"];
var arr2 = arr.slice(1,4);
console.log(arr2.join(' - ')); */

// 6. foreach
var angka = [1,2,3,4,5,6,7,8];
var arr = ["Rifqi", "Fadh", "Noval", "Wawan", "Doddy"];
var cetak = function(e){
    console.log(e);
}

angka.forEach(cetak);

arr.forEach(function(e, i){
    console.log('Mahasiswa Ke-' + (i+1) + ' Adalah: ' + e);
})


/* // 7. Map
var angka = [1,2,3,4,5,6,7,8];
var angka2 = angka.map(function(e){
    return e * 2;
})

console.log(angka.join(' - ')); */


/* // 8. Sort
var angka = [1,10,2,9,20,6,5,3,4,8,7];
angka.sort(function(a,b){
    return a-b;
});
console.log(angka.join(' - ')); */


// 9. Filter & Fin
var angka = [1,10,2,9,20,6,5,3,4,8,7];
var angka2 = angka.filter(function(x){
    return x > 5;
})

console.log(angka2.join(" - "));




