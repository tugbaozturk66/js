const yaslar = [5, 10, 28, 42];
const isimler = [
  "Hakan",
  "Alaattin",
  "Furkan",
  "Dayanch",
  20,
  40,
  true,
  23.5,
  yaslar,
  "Ayse",
];
console.log(isimler);
console.log(isimler[3]);
console.log((isimler[3] = "Sadi"));
//const degistirilemiyordu ama non_primitive
//lerde degistirilebiliyor. dizi bir adrs gosterir
//isimler gibi,o yuzden primitive den farkli
isimler[isimler.length - 5] = false;
let meyveler = ["Elma", "Armut", "Muz", "Kivi"];
const baslik = document.querySelector(".baslik");

console.log(isimler[8][1]);
//pop()en son elemani siler
//log icinde yazdirirsaniz sildigini yazdirir
//meyveler.pop();
console.log(meyveler.pop());
//shift() dizinin 0 indexli elemanini yani ilk elemani siler
// ve yazdirirsak sildigi elemani dondurur.
//meyveler.shift();
console.log(meyveler.shift());
//push sona eleman ekler
console.log(meyveler.push("Cilek", "Karpuz"));
//unshift() dizinin 0 index ine eleman ekler
console.log(meyveler.unshift("Ayva"));
//meyveler.reverse();
meyveler.splice(1, 0, "Erik");
meyveler.splice(4, 1, "Uzum");
meyveler.sort();
const sayilar = [3, 4, 5, 2, "2", "uc", "bes", 5, 2, 7];
//include() kapsiyor mu?
console.log(sayilar.includes("5"));
console.log(sayilar.includes(5));
//indexOf()ilk eslesen index i dondurur
console.log(sayilar.indexOf(2));
console.log(sayilar.lastIndexOf(5));
console.log(sayilar.indexOf(2, 4)); // 4 elmandan sonraki 2 nin indexini bul demek

console.log(sayilar.join(" "));
console.log(sayilar.toString()); //sadece joinden farki virgulle ayirir.

const arabalar = ["bmw", "mercedes", "Volvo", "sahin", "anadol"];
//slice
console.log(arabalar.slice(2)); //2. indexten sonra sonuna kadar yazdir
console.log(arabalar.slice(1, 3)); //ilk index dahil ikinci index dahil degil
const birlesik = sayilar.concat(arabalar, true, false, [3, 4, 5], meyveler);
baslik.textContent = arabalar;
console.log(birlesik);

//baslik.textContent = meyveler;
//console.log(meyveler);
