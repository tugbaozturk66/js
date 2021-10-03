//dizelerde iterasyon
//for dongusu
const koordinatlar = [120, 100, -100, 220, 330, -50];
/*let pozitif = 0;
let negatif = 0;
for (let i = 0; i < koordinatlar.length; i++) {
  koordinatlar[i] < 0
    ? (negatif = negatif + koordinatlar[i])
    : (pozitif = pozitif + koordinatlar[i]);
}
console.log(pozitif);
console.log(negatif);
console.log(`pozitifler toplami: ${pozitif} negatifler toplami: ${negatif}`);*/

let pozitif = 0;
let negatif = 0;
for (let i in koordinatlar) {
  koordinatlar[i] < 0
    ? (negatif = negatif + koordinatlar[i])
    : (pozitif = pozitif + koordinatlar[i]);
}
console.log(pozitif);
console.log(negatif);
console.log(`pozitifler toplami: ${pozitif} negatifler toplami: ${negatif}`);
// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
// bir dizide saklandığı varsayalım.Bu hayvanları türüne
// göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//  ana programa döndürecek fonksiyonu yaziniz. Eğer o
// türden bir hayvan yok ise bulunamadığını yazdırsın.
const hayvanlar = [
  "aslan",
  "fil",
  "kartal",
  "kanarya",
  "aslan",
  "aslan",
  "timsah",
];
const ara = prompt("sayisini merak ettigin hayvanin adini yaz");
//const bulDondur = function (ara) {
let hayvanSayisi = 0;
for (let i in hayvanlar) {
  if (hayvanlar[i] == ara) {
    hayvanSayisi++;
  }
}
hayvanSayisi == 0
  ? alert("aradiginiz hayvandan bulunamadi")
  : alert(`aradiginiz ${ara} hayvanin sayisi: ${hayvanSayisi}`);
//};
//bulDondur(ara);
//***** FOR OF DONGUSU****** */
let arabalar = ["BMW", "Volvo", "Mini"];
for (let i of arabalar) {
  console.log(i);
}
//***********FOREACH METODU*********** */
let ogrenciler = ["Onur", "Hakan", "Furkan"];
ogrenciler.forEach((x) => console.log(x));
//console.log(ogrenciler);

ogrenciler.forEach((deger, index) =>
  console.log(index + ".kisi " + deger + "dir")
);
const rakamlar = [3, 5, 3, 2, 6, 7, 9];
console.log(rakamlar.map((x) => x * 3));
console.log(
  rakamlar.map((x, index) => `${index + 1}. elemanin 3 kati ${x * 3}`)
);
const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];
const buyuk = isimler.map((isim) => isim.toUpperCase());
console.log(buyuk);
document.querySelector(".baslik").textContent = buyuk.join("->");
//******FİLTER**** */
//fiyatlar dizisindeki 250 den buyuk fiyatlari yaz
const fiyatlar = [120, 260, 300, 322.5, 400, 768];
console.log(fiyatlar.filter((t) => t > 250));
//-------------- ÖRNEK -------------------
// maası 4000 $’dan düsük olanlara %50 zam yapmak istiyoruz
// ve bunu ayri dizi olarak saklamak istiyoruz.
const maaslar = [3000, 5000, 4000, 6000, 6500];
console.log(maaslar.filter((a) => a <= 4000).map((a) => a * 1.5));
const adlar = [
  "Samet",
  "Hakkı",
  "Duygu",
  "Emrullah",
  "Bilal",
  "Ali",
  "Ahmet",
  "Hasan",
  "Defne",
  "Serdar",
];
adlar.filter((a) => a.startsWith("A")).forEach((a) => console.log(a));
//*********REDUCE**** */
//reduce cikis metodudur.reduce den sonra for each calismaz
const maaslarim = [3000, 5000, 4000, 2000, 1000];
console.log(maaslarim.reduce((x, y) => x + y, 0));
