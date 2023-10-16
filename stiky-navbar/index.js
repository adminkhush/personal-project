const navbarE1=document.querySelector(".navbar");
const bottoContainer=document.querySelector(".bottom-container");
//console.log(navbarE1.offsetHeight);
//console.log(bottoContainer.offsetTop);
window.addEventListener("scroll",()=>{
    if(window.scrollY>bottoContainer.offsetTop-navbarE1.offsetHeight-50){
navbarE1.classList.add("active");

    }else{
        navbarE1.classList.remove("active");
    }
});
