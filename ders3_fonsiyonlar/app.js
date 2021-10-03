//FONKSIYONLAR
//!1.YONTEM: FUNCTION DECLARATION
//DECLARATION yontemi ile fonksiyonun tanimlanmasi cagrilmasindan once
//veya sonra olabilir
//fonksiyonun tanimlanmasi
function yazdirAd() {
  console.log("Hakan");
}
//fonksiyonun cagirilmasi
yazdirAd();
//ornek:klavyeden girilen sayinin tek mi
//cift mi oldugunu gosteren bir fonk. yaziniz
const sayiniz = prompt("sayi giriniz");
console.log(tekCift(sayiniz));
function tekCift(sayimiz) {
  return sayimiz % 2 == 0 ? `${sayimiz} ciftir` : `${sayimiz} tektir`;
}
//!2.YONTEM:FUNCTION EXPRESSION(bu yontem daha yaygin)
const tekCift1 = function (sayi) {
  return sayi % 2 == 0 ? "CIFT" : "TEK";
};
console.log(tekCift1(5));
//ornek2 verilen uc sayidan en buyuk sayiyi bulma
let buyukBul = function (x, y, z) {
  let enBuyuk;
  if (x > y && x > z) {
    enBuyuk = x;
  } else if (y > x && y > z) {
    enBuyuk = y;
  } else {
    enBuyuk = z;
  }
  return enBuyuk;
};
console.log(buyukBul(5, 8, 3));
//!3.YONTEM:FUNCTION ARROW(ok)
const ciftMi = (sayi) => (sayi % 2 == 0 ? "cift" : "tek");
console.log("sayi" + ciftMi(7));
// ornek fonksiyon ile us alma
const taban = prompt("taban gir");
const us = prompt("us giriniz");
const ustAl = (taban, us) => taban ** us;
console.log(ustAl(taban, us));
