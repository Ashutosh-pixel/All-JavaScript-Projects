let strhour = document.querySelector('#hour');
let strminute = document.querySelector('#minute')
let strseconds = document.querySelector('#seconds')
let stranote = document.querySelector('#anote')
let strdate = document.querySelector('#date')
let strday = document.querySelector('#day')
let strmonth = document.querySelector('#month')




setInterval(() => {
    
    let time = new Date();
    console.log(time.getDate().toString()); 

    let hours = time.getHours().toString();
    
    let anote = hours >= 12 ? 'PM':'AM'

    hours = (hours == 0 || hours == 12) ? 12: hours % 12


    
    let minute = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();

    if(minute >= 0 && minute < 10){
        strminute.innerHTML = '0' + minute
    }
    else
    strminute.innerHTML = minute

    if(hours >= 0 && hours < 10){
        strhour.innerHTML = '0' + hours
    }
    else
        strhour.innerHTML = hours

    if(seconds >= 0 && seconds <10){
        strseconds.innerHTML = '0' + seconds;
    }
    else
        strseconds.innerHTML = seconds;



    stranote.innerHTML = anote;

}, 1000);

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let datetime = new Date();

strdate.innerHTML = datetime.getDate().toString();
strday.innerHTML = weekday[datetime.getDay()]
strmonth.innerHTML = month[datetime.getMonth()] + ","
