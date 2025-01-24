function checkAnomalies(ST_PLN, ST_DEG) {
    const statusPlns = [ST_PLN]; 
    const statusDegs = [ST_DEG]; 

    const countPlnOn = statusPlns.filter(val => val === 0).length; 
    const countDegOn = statusDegs.filter(val => val === 1).length;

    console.log("Nilai countPlnOn:", countPlnOn);

    console.log("Nilai countDegOn:", countDegOn);

    // Periksa kondisi
    if (statusPlns.length === 0 && statusDegs.length === 0) {
        return 3; // Anomali karena kedua sensor tidak ada
    } else if (countPlnOn > 0 && countDegOn > 0) {
        return 1; // Anomali karena kedua sensor menyala
    } else if (countPlnOn === 0 && countDegOn === 0) {
        return 2; // Anomali karena kedua sensor mati
    } else {
        return 0; // Kondisi normal
    }
}

// Contoh penggunaan fungsi
const result = checkAnomalies(0,1)
console.log(result); // Output akan sesuai dengan kondisi
