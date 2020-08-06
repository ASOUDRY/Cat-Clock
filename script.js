
showCurrentTime = () => {
  const date = new Date(); /* creating object of Date class */
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

fixTime = k => {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}
  hour = fixTime(hour);
  min = fixTime(min);
  sec = fixTime(sec);

document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec;
//Put the pieces together
  let t = setTimeout(() => { showCurrentTime() }, 1000); /* setting timer */
}

let wakeuptime = 7;
let noon = 12;
let lunchtime = 12;
let naptime = lunchtime + 2;
let partytime;
let evening = 18;


// Getting the clock to increment on its own and change out messages and pictures
let updateClock = function() 
{
  let time = new Date().getHours();
  let messageText;
  let image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  let timeEventJS = document.getElementById("timeEvent");
  let lolcatImageJS = document.getElementById('lolcatImage');
  
  if (time == partytime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Let's party!";
  }
  else if (time == wakeuptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
let oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
let partyButton = document.getElementById("partyTimeButton");

let partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();



// Activates Wake-Up selector
let wakeUpTime =  document.getElementById("wtime");

let wakeUp = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTime.addEventListener("change", wakeUp);


// Activates Lunch selector
let foodTime =  document.getElementById("ftime");

let foodEvent = function()
{
    lunchtime = foodTime.value;
};

foodTime.addEventListener("change", foodEvent);


// Activates Nap-Time selector
let napTime =  document.getElementById("ntime");

let napEvent = function()
{
    naptime = napTime.value;
};

napTime.addEventListener("change", napEvent);






