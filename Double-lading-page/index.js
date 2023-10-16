const containerE1=document.querySelector(".container");


const leftE1=document.querySelector(".left");
const rightE1=document.querySelector(".right");

leftE1.addEventListener("mouseenter",()=>{
    containerE1.classList.add("active-left");

});
leftE1.addEventListener("mouseout",()=>{
    containerE1.classList.remove("active-left");
});
rightE1.addEventListener("mouseenter",()=>{
    containerE1.classList.add("active-right");

});
rightE1.addEventListener("mouseout",()=>{
    containerE1.classList.remove("active-right");
});