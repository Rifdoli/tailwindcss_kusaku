var s = '';

/*
//Bagian Atas Segitiga

for(var i = 1; i <= 7; i++)
    {
        for(var j = 1; j <=i; j++)
        {
            s+= '*';
        }
        s += '\n'
    }

//Bagian Bawah Segitiga

for(var i = 6; i > 0; i--)
    {
        for(var j = 1; j <=i; j++)
        {
            s+= '*';
        }
        s += '\n'
    }

console.log(s);
*/

for(var i = 1; i <= 4; i++)// Baris
    {
    for(var j=0; j < 4 - i; j++)// Spasi di Baris
        {
            s+= ' ';
        }
    for(var k=0; k < (2 * i) - 1; k++)//bintang di baris
        {
            s+= '*';
        }
    s+= '\n';
    }

console.log(s);


