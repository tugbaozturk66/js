const s1 = Number(prompt("birinci sayı"));
const islem = prompt("işlemi giriniz");
const s2 = Number(prompt("ikinci sayı"));
let sonuc = 0;
console.log(sonuc);
if (islem == "+") {
  sonuc = s1 + s2;
} else if (islem == "-") {
  sonuc = s1 - s2;
} else if (islem == "*") {
  sonuc = s1 * s2;
} else if (islem == "/") {
  sonuc = s1 / s2;
}
console.log(sonuc);
const name2 = prompt("Adinizi giriniz:"); 
const age = Number(prompt("Yasinizi giriniz:"));
const healt = prompt("Saglikli misiniz e/h");
console.log(
  age >= 18 && healt == "e"
    ? `${name2} ehliyet alabilir`
    : `${name2} ehliyet alamaz`
);
var sayii = prompt("Nolur iki basamaklı bir sayı girin.");
var birler = sayii % 10;
switch (birler) {
  case 1:
    rakamIsmi = "Bir";
    break;
  case 2:
    rakamIsmi = "İki";
    break;
  case 3:
    rakamIsmi = "Üç";
    break;
  case 4:
    rakamIsmi = "Dört";
    break;
  case 5:
    rakamIsmi = "Beş";
    break;
  case 6:
    rakamIsmi = "Altı";
    break;
  case 7:
    rakamIsmi = "Yedi";
    break;
  case 8:
    rakamIsmi = "Sekiz";
    break;
  case 9:
    rakamIsmi = "Dokuz";
    break;
  case 0:
    rakamIsmi = "Sıfır";
    break;
}
console.log(rakamIsmi);
var cayi=10;
​var asal1=true;
for (let i = 2; i < cayi; i++) {
  if (cayi % i == 0) {
    asal1=false;
    break;
  }
}
console.log(asal ? "ASAL" : "ASAL DEGIL");
​let not;
do {
  not = prompt("Lütfen do-while için 0-100 arasında bir not giriniz:");
} while (not < 0 || not > 100);
console.log("Giridiğiniz not 0-100 arasındadır");
​let adi = prompt("başlat yaz enter la");
let i = 1;
while (adi != "end") {
  //true yerine 1 de yazılabilir, bunlar hep true demek.0=false olur
  adi = prompt(i + ".kisinin adını giriniz:");
  i++;
  console.log(adi);
}