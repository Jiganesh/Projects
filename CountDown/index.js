const countdown =()=>{

    let birthday = new Date('July 1, 2021 00:00:00').getTime();
    let now = new Date().getTime();
    let gap = birthday -now;


    let second =1000;
    let minute = 60 * second;
    let hour = 60 * minute;
    let day = 24 *hour;

    let days = Math.floor(gap/day)
    let hours = Math.floor(gap%day /hour)
    let minutes = Math.floor(gap%hour /minute)
    let seconds = Math.floor(gap%minute/second)

    document.getElementById('days').innerHTML = days
    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds
}
setInterval(countdown,1000);