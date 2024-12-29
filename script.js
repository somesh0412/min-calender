const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();
console.log(today);

const weekDays = ["Sunday","Monday","Tuseday","Wensday","Thusday","Friday","saturday"];
const allMonths = ["January","February","March","April","May","June","Jully","August","September","October","November","December"];

date.innerHTML = (today.getDate()<10?"0" : "") + today.getDate();
day.innerHTML = weekDays [today.getDay()];
month.innerHTML = allMonths [today.getMonth()];
year.innerHTML = today.getFullYear();