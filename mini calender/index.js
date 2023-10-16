const monthName=document.getElementById("month");
const dateName=document.getElementById("date");
const dayName=document.getElementById("day");
const yearName=document.getElementById("year");
const date= new Date;
monthName.innerText=date.toLocaleString("en",{
    month:"long"
});
dateName.innerText=date.getDate();
dayName.innerText=date.toLocaleString("en",{
    weekday:"long"
});
yearName.innerText=date.getFullYear();
