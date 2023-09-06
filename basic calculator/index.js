
    const buttonE1=document.querySelectorAll("button");
const resultE1=document.getElementById("result");
    for( let i =0; i<buttonE1.length;i++){
        buttonE1[i].addEventListener("click",()=>{
const buttonValue = buttonE1[i].textContent;
if(buttonValue === "c"){
clearResult();
} 
else if(buttonValue === "="){
    calculateResult();

} else{
    appendValue(buttonValue);
}
      });
    } 
    function clearResult(){
        resultE1.value="";
    }
    function calculateResult(){
        resultE1.value = eval(resultE1.value);

    }
    function appendValue(buttonValue){
        resultE1.value += buttonValue;
    }
   
