const tabE1= document.querySelector(".tabs");
const btns= document.querySelectorAll(".button");
const articleE1= document.querySelectorAll(".content");
tabE1.addEventListener("click",function(e){
    const id =e.target.dataset.id;
    if (id){
        btns.forEach(function (btn){
    btn.classList.remove("live");
});
e.target.classList.add("live");
articleE1.forEach(function(article){
    article.classList.remove("live");

});
const element =document.getElementById(id);
element.classList.add("live");
    }
});