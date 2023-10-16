const starE1=document.querySelectorAll(".fa-star");

const emojiE1=document.querySelectorAll(".far");

const colors=["red","blue","orange","lightgreen","green"];
updateRating(0);
starE1.forEach((star,index) =>
{
    star.addEventListener("click",()=>{
        updateRating(index);
    });
});
function updateRating(index){
starE1.forEach((star,idx)=>{
if(idx<index+1){
    star.classList.add("active");

}else{
    star.classList.remove("active");
}
});
emojiE1.forEach((emoji)=>{
    emoji.style.transform=`translateX(-${index*50}px)`
emoji.style.color=colors[index];
});
}