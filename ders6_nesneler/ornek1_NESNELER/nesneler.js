const insan = {
  ad: "Kenan",
  soyad: "Kul",
  yas: 30,
  meslek: "developer",
  diller: ["Java", "JS", "SQL", "HTML"],
};
//.dot notasyonu
console.log(insan);
console.log(insan.ad);
//koseli parantez icine
console.log(insan["ad"]);
console.log(insan.diller);
console.log(insan["diller"]);
console.log(`Adim ${insan.ad} ve yasim ${insan.yas}`);

/*const bilgi = prompt(
  "insan nesnesinden hangisini gormek istersin -ad,soyad,yas..-"
);
console.log(insan[bilgi]);*/
//objeye key.value lar ekleme
insan.konum = "Turkiye";
insan.email = "insan@hotmail.com";
insan["dogumTarihi"] = 1991;
console.log(insan);
//***NESNE methodlari****** */
const kisi = {
  ad: "Merve",
  soyad: "Aslan",
  dogumTarihi: 1990,
  meslek: "tester",
  tool: "selenyum",
  ehliyet: true,
  yasHesapla: function () {
    //bugunun yilini al=>Date()getFullYear()-dogumTarihi
    return new Date().getFullYear() - this.dogumTarihi;
  },
  ozet: function () {
    return `${this.ad} ${this.soyad} ${this.yasHesapla()} yasindadir`;
  },
};
console.log(kisi);
console.log(kisi.yasHesapla());
console.log(kisi.ozet());

//nesne (object) iterasyon ornekleri
const people = [
  { ad: "hakan", soyad: "inal", meslek: "developer", yas: 41 },
  { ad: "said", soyad: "can", meslek: "tester", yas: 37 },
  { ad: "kubilay", soyad: "tuncer", meslek: "teamlead", yas: 33 },
  { ad: "osman", soyad: "turker", meslek: "grafiker", yas: 29 },
  { ad: "huseyin", soyad: "harran", meslek: "doktor", yas: 34 },
];
console.log(people);
//ornek1 people dizisinden kisilerin mesleklerini yazdir
people.forEach((x) => console.log(x.meslek));
//ornek2 people dizisindeki tum kisilerin yaslarini 1 artirarak yazdir
people.map((x) => x.yas + 1).forEach((x) => console.log(x));
console.log(people.map((x) => x.yas + 1)); //dizi icinde yazdiriyor.
//ornek3 yasi 35 e esit veya kucuk olanlarin adlarini yazdir
people.filter((x) => x.yas <= 35).forEach((x) => console.log(x));
//ornek4 kisilerin isimlerini buyuk harf olarak duzenle ve yaslarini 5 artiran ve
//soyadinin ilk iki harfini yazdiran fonksiyonu yazdirin
people
  .map((x) => {
    return {
      ad: x.ad.toUpperCase(),
      yas: x.yas + 5,
      soyad: x.soyad.slice(0, 2),
    };
  })
  .forEach((x) => console.log(x));
//meslegi developer olanlarin isimleri buyuk harf yapip ve yaslarini yazdiriniz
//isterseniz diziye atayip diziyi yazdirin
const yeni = people
  .filter((x) => x.meslek == "developer")
  .map((x) => {
    return {
      ad: x.ad.toUpperCase(),
      yas: x.yas,
    };
  });
console.log(yeni);
