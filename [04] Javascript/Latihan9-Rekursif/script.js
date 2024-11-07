/* function tampilAngka(n){
    if ( n=== 0) return;
    console.log(n);
    return tampilAngka(n-1);
}



tampilAngka(10); */

function factorial (n){
    if (n===0) return 1;
    return n * factorial(n-1);
}

var hasil;
hasil = factorial(5);
console.log(hasil);