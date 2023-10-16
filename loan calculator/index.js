function calculateLoan (){
    loanAmount= document.getElementById("loan-amount").value;
    loanRate= document.getElementById("loan-rate").value;
    monthPay= document.getElementById("month-pay").value;
    monthToPay= document.getElementById("monthly-payment").value;

    interest=(loanAmount*(loanRate*.01)/monthPay);
    monthToPay= (loanAmount/monthPay+interest);
    document.getElementById("monthly-payment").innerHTML = `Monthly payment: ${monthToPay}`

}