const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();


let futureDate = new Date(tempDate.getFullYear(), tempDate.getMonth(),tempDate.getDate()+10 , tempDate.getHours(),tempDate.getMinutes(),0);

const year = futureDate.getFullYear();
let month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${weekday},${date} ${month} ${year}, ${hours}:${mins}am`

// future time in ms

const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime(){
  const today = new Date().getTime();
  let t = futureTime - today;
  let checkT = t;
  console.log(checkT);

  // values in ms in a day
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;

  // currrent all vaues
  let days = Math.floor(t / oneDay);
  t%=oneDay;
  let hours = Math.floor(t / oneHour);
  t%=oneHour;
  let minutes =Math.floor( t / oneMinute);
  t%=oneMinute;
  let sec = Math.floor(t / 1000);
  

  //  set values array;
  const values = [days,hours,minutes,sec];

function formate(item){
  if(item < 10)
    return `0${item}`
  else
    return item;
}


  items.forEach(function(item, index){
    item.innerHTML = formate(values[index]);
  })
  if(checkT<0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
  }
}
// countdown
let countdown = setInterval(getRemainingTime,1000);


getRemainingTime();


