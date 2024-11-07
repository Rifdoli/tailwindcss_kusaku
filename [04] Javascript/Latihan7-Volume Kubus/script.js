function jumlahVolumeDuaKubus(a,b){
    var total, volumeA, volumeB;

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}

var hasil, hasil_1, hasil_2;
hasil = jumlahVolumeDuaKubus(8,3);
hasil_1 = jumlahVolumeDuaKubus(10,5);
hasil_2 = jumlahVolumeDuaKubus(2,4);

console.log(hasil);
console.log(hasil_1);
console.log(hasil_2);





