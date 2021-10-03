//ara butonuna tiklandiginda calan telefon ciksin ve zil calsin
let resim = document.querySelector(".resim");
let ring = document.querySelector(".ses");
document.querySelector(".on").onclick = function () {
  resim.src = "./img/img.gif";
  ring.play();
};
//baglat butonuna basinca gif gelsin ses kesilsin
document.querySelector(".off").onclick = function () {
  resim.src = "./img/telbagla.gif";
  ring.pause();
};
//konus kismina basinca yeni gif gelsin
document.querySelector(".speak").onclick = function () {
  resim.src = "./img/telfrlat.gif";
};
//ekle butonuna basildiginda yeni bir li ekle
const liste = document.querySelector(".liste");
document.querySelector(".ekle").onclick = function () {
  const giris = document.querySelector(".dil");
  liste.innerHTML = liste.innerHTML + `<li>${giris.value}</li>`;
  giris.value = "";
};
document.querySelector(".sil").onclick = function () {
  liste.removeChild(liste.lastChild);
};
const parag = document.querySelector(".forH1");
parag.innerHTML = `<h1>${"Programlama Dilleri"}</h1>`;
document.querySelector(".textbox").onkeyup = function () {
  const checkbox = document.querySelector(".checkbox");
  const textbox = document.querySelector(".textbox");
  if (checkbox.checked) {
    textbox.value = textbox.value.toUpperCase();
  } else {
    textbox.value = textbox.value.toLowerCase();
  }
};
//resim mausenin ustune geldiginde aslan kukresin
resim.onmouseover = function () {
  resim.src = "./img/aslan2.jpeg";
};
resim.onmouseout = function () {
  resim.src = "./img/aslan1.jpeg";
};
resim.addEventListener("mouseout", function () {
  resim.src = "./img/aslan1.jpeg";
});
//enter 13, delete 46;
//onkeydown= klavyedeki taşa basip cektiginizde
document.querySelector(".dil").onkeydown = function (olay) {
  if (olay.keyCode == 13) {
    //enter a basildiginda
    document.querySelector(".ekle").onclick();
  }
  if (olay.keyCode == 46) {
    //delete ye basildiginda
    document.querySelector(".sil").onclick();
  }
};
