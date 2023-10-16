function calculateWeight(){
    weightInPoundValue =document.getElementById("wieght-in-pound").value;
    resultValue = document.getElementById("result").value;
    kilogramWeightValue = (weightInPoundValue/2.205);
    document.getElementById("result").innerHTML = `Your weight in kg is: ${kilogramWeightValue}`

}