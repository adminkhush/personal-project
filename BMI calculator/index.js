const btnE1 = document.getElementById("btnbmi");
const bmiE1 =document.getElementById("result");
const weightconditionE1 =document.getElementById("weight-result");

function computeBmi(){
const heightE1=document.getElementById("height").value/100;
const weightE1=document.getElementById("weight").value;
const bmiValue = weightE1 /(heightE1*heightE1);
bmiE1.value = bmiValue;
if( bmiValue<18.5){
weightconditionE1.innerText = "under weight";
}
else if(bmiValue>=18.5 && bmiValue<=24.9)
{
weightconditionE1.innerText = "normal weight";

}
else if(bmiValue>=25 && bmiValue<=30)
{
weightconditionE1.innerText = "over weight";

}
else if (bmiValue>30)
{
weightconditionE1.innerText = "obesity";
}
}
btnE1.addEventListener("click", computeBmi);
