var tanya = true;
while(tanya){
    // menangkap pilihan player
    var p = prompt ('Silahkan Pilih: Gajah, Semut atau Orang');

    // menangkap pilihan dari komputer

    // menentukan bilangan random
    var comp = Math.random();

    if(comp < 0.34){
        comp = 'Gajah'
    }else if(comp >= 0.34 && comp < 0.67){
        comp = 'Orang'
    }else{
        comp = 'Semut'
    }

    // menentukan rules
    var hasil = '';

    if(p == comp){
        hasil = 'SERI'
    } else if(p == 'Gajah'){
        // if(comp == Orang){
        //     hasil = 'MENANG'
        // }else{
        //     hasil = 'KALAH'
        // }
        hasil = (comp == 'Orang') ? 'MENANG' : 'KALAH';
    } else if(p == 'Orang'){
        hasil = (comp == 'Semut') ? 'MENANG' : 'KALAH';
    } else if(p == 'Semut'){
        hasil = (comp == 'Gajah') ? 'MENANG' : 'KALAH';
    } else {
        hasil = 'Anda memasukan pillihan yang salah';
    }

    // tampilkan hasilnya
    alert('Kamu memilih : '+p+' dan komputer memilih : '+comp+'\nMaka hasilnya : Kamu '+hasil);

    tanya = confirm ('lagi?');

}

alert('Terima Kasih');
