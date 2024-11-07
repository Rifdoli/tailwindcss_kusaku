var penumpang = ['Rifqi','Renjani','Diah'];
var tambahPenumpang = function(namaPenumpang,penumpang){
    //jika angkot kosong
    if (penumpang.length == 0){
        //tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        //kembalikan isi array & keluar dari function
        return penumpang;
    }

    else{
        //telusuri seluruh kursi dari awal
        for(var i = 0; i < penumpang.length; i++){
            //jika ada kursi kosong
            if (penumpang[i] == undefined){
                //tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                //kembalikan isi array & keluar dari function
                return penumpang;
            }

            //jika sudah ada nama yang sama
            else if (penumpang[i] == namaPenumpang){
                //tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' sudah ada di dalam angkot');
                //kembalikan isi array & keluar dari function
                return penumpang;
            }

            //jika seluruh kursi sudah terisi
            else if (i == penumpang.length - 1) {
                //tambah penumpah di akhir array
                penumpang.push(namaPenumpang);
                //kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang,penumpang) {
    //jika angkot kosong
    if (penumpang.length == 0){
        //tampilkan pesan bahwa angkot kosong
        console.log('Angkot masih kosong!');
        //kembalikan isi array & keluar dari function
        return penumpang;
    }

    else{
        //telusuri kursi dari awal
        for(var i = 0; i < penumpang.length; i++){
            //jika ada nama penumpang yang sesuai
            if(penumpang[i] == namaPenumpang){
                //hapus nama penumpang di array dengan memberi nilai undefined
                penumpang[i] = undefined;
                //kembalikan isi array & keluar dari function
                return penumpang;
            }

            //jika tidak ada nama penumpang yang sesuai
            else if (i == penumpang.length - 1){
                //tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' tidak ada di dalam Angkot.');
                //kembalikan isi array & keluar dari function
                return penumpang;
            }
        }

    }
}