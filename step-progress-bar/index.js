const nextE1= document.getElementById("next");
const prevE1= document.getElementById("prev");
const progressE1=document.querySelector(".progress-front");
let stepE1=document.querySelectorAll(".step");
let currentCheck=1;
nextE1.addEventListener("click",()=>{
    currentCheck++;
if(currentCheck>stepE1.length){
    currentCheck=stepE1.length;
}
updateStepProgressBar();
});
prevE1.addEventListener("click",()=>{
    currentCheck--;
if(currentCheck<1){
    currentCheck=1;
}
updateStepProgressBar();
});

function updateStepProgressBar(){
stepE1.forEach((stepE1,idx)=>{
    if(idx<currentCheck){
        stepE1.classList.add("check");
          stepE1.innerHTML=` <i class="fa-solid fa-check"></i>
          <small>${
             idx===0
            ? "start"
            : idx === stepE1.length-1
            ? "final"
           
          :"step"+idx
          } </small>
      `;
    }else{
stepE1.classList.remove("check");
stepE1.innerHTML =`<i class="fa-solid fa-xmark"></i>`;
    }
});

const checkNumber=document.querySelectorAll(".check");
progressE1.style.width =((checkNumber.length - 1)/(stepE1.length - 1)) * 100 + "%";
if(currentCheck===1){
    prevE1.disabled=true;

}else if (currentCheck===stepE1.length){
    nextE1.disabled=true;
}else{
    prevE1.disabled=false;
    nextE1.disabled=false;
}


}
