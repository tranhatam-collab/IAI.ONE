function setLang(lang){

localStorage.setItem("lang",lang);

location.reload();

}

function loadLang(){

const lang = localStorage.getItem("lang") || "vi";

let L = LANG_VI;

if(lang==="en") L = LANG_EN;

document.querySelectorAll("[data-lang]").forEach(el=>{
const key = el.getAttribute("data-lang");

if(L[key]) el.innerText = L[key];
});

}

document.addEventListener("DOMContentLoaded",loadLang);
