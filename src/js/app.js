// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    console.log('netlifyIdentity');
    console.log(user);
    console.log(document.location);
    
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
    
    
  });
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
var referrer=document.referrer;
conslole.log(referrer);
if(getUrlVars()["fbclid"] || (referrer && referrer.includes("facebook"))){
var url = window.location.href.replace('.html','').replace("https://zeptha.netlify.app/","https://zeptha.com/");
window.location = url;
}
