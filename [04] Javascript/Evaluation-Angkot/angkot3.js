var jmlAngkot = 10;
var noAngkot = 1;
var angkotBeroperasi = 6;

for(noAngkot; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log ('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    }

    else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }
}

/*

while(noAngkot <= angkotBeroperasi){
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    noAngkot++;
}

for(var angkotTdkBeroperasi = (angkotBeroperasi+1); angkotTdkBeroperasi <= jmlAngkot; angkotTdkBeroperasi ++){
    console.log('Angkot No. ' + angkotTdkBeroperasi + ' sedang tidak beroperasi.');
}*/