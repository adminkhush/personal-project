const menuE1= document.querySelector(".menu");
const socialListE1= document.querySelector(".social-list");
const liE1s= document.querySelectorAll(".social-list li");
const menuTextE1=document.querySelector(".menu p");

menuE1.addEventListener("click",()=>{
    menuE1.classList.toggle("rotate");
    socialListE1.classList.toggle("hide");

});
liE1s.forEach((liE1)=>{
    liE1.addEventListener("click",()=>{
        menuTextE1.innerHTML= liE1.innerHTML;
        socialListE1.classList.add("hide");
        menuE1.classList.toggle("rotate");

    });
});