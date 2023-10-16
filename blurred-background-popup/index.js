const containerE1=document.querySelector(".container");
const clickBtn=document.querySelector(".click");
const popupContainerE1=document.querySelector(".popup-container");

const closeBtn=document.querySelector(".close-icon");
clickBtn.addEventListener("click",()=>{
    containerE1.classList.add("active");
    popupContainerE1.classList.remove("active");
});
closeBtn.addEventListener("click",()=>{
    containerE1.classList.remove("active");
    popupContainerE1.classList.add("active");
 
});