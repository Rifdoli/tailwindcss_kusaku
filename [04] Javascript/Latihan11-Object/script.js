//Membuat object

/* var mhs = {
    nama: 'Sandhika Galih',
    umur: 31,
    ips: [3.00, 2.50, 3.20],
    alamat: {
        jalan: 'Jl. ABC No.123',
        kota: 'Bandung',
        Provinsi: 'Jawa Barat'
    }
}; */

// Function Declration
function buatObjectMahasiswa(nama,nrp,email,jurusan){
    var mhs ={};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Nova','3456','nova@gmail.com','Pangan');

// Function Constructor
function Mahasiswa(nama,nrp,email,jurusan){
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa ('Erick','2345','ercik@gmail.com','Gizi');