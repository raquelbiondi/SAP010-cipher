import cipher from "./cipher.js"

console.log(cipher);

const offset = document.getElementById("secret-key");
const box1 = document.getElementById("entertext");
const crip = document.getElementById("cript");
const box2 = document.getElementById("textexit");
const descrip = document.getElementById("descript");

crip.addEventListener("click", acaoCode);
descrip.addEventListener("click", acaoDecode);

function acaoCode() {
  box1.value = cipher.encode(parseInt(offset.value), box1.value);
}

function acaoDecode() {
  box2.value = cipher.decode(parseInt(offset.value), box1.value);
}