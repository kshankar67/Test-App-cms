// JS Goes here - ES6 supported

import "./css/main.scss";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
var referrer=document.referrer;
console.log(referrer);
if(getUrlVars()["fbclid"] || (referrer && referrer.includes("facebook"))){
var url = window.location.href.replace('.html','').replace("https://loquacious-paletas-1dfe0b.netlify.app/","https://zeptha.com/");
window.location = url;
}
