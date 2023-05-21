document.writeln("Hello World");
document.writeln("</br>");

document.writeln("<textarea cols= '100' rows='10'>");
document.writeln("\nNama = Anggi");
document.writeln("\nNIM = 20105244014");
document.writeln("\nKelas = TP B 2020");

document.writeln(0b0101);
document.writeln("</textarea");
document.writeln("</br>");

document.writeln("</br>");
var fullname = "Anggi Anggreini"
var firstName = "Anggi";
var lastName = "Anggreini";

document.writeln("Nama lengkap:" + fullname);
document.writeln("</br>");
document.writeln("Nama pertama:" + firstName);
document.writeln("</br>");
document.writeln("Nama belakang:" + lastName);

let counter = 1;
for (;counter <=10;) {
    document.writeln('<p>Perulangan ke' +counter+ '</p>')
    counter++;
}

function segitiga1(baris) {
let pola ='';
for(let i=1; i <= baris; i++){
    for (let j=1; j <= i; j++){
        pola += '*';
    }
    pola += '</br>';
 }
 return pola;
}
document.writeln(segitiga1(5));

function segitiga2(baris) {
    let pola ='';
    for(let i=1; i <= baris; i++){
        for (let j=baris; j >= i; j--){
            pola += '*';
        }
        pola += '</br>';
     }
     return pola;
    }
    document.writeln(segitiga2(5));

function segitiga3(baris) {
    let pola ='';
    for(let i=1; i <= baris; i++){
        for (let j=baris - 1; j >= i; j--){
            pola += '_';
        }
        for (let k=1; k <=i;k++){
            pola +='*';
        }
        pola += '</br>';
        }
    return pola;
    }
    document.writeln(segitiga3(5));

function segitiga4(baris) {
    let pola ='';
    for(let i=1; i <= baris; i++){
        for (let j=baris - 1; j >= i; j--){
            pola += '_';
        }
        for (let k=1; k <=i;k++){
            pola +='*';
        }
        for (let m=1;m<=i-1;m++){
            pola +='*';
        }
        pola += '</br>';
        }
    return pola;
    }
    document.writeln(segitiga4(5));