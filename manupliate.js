setInterval(() => {
    date = new Date();
    hourtime = date.getHours();
    minutetime = date.getMinutes();
    secondtime = date.getSeconds();
    hourrotation = 30 * hourtime + minutetime / 2;
    minuterotation = 6 * minutetime;
    secondrotation = 6 * secondtime;
    Hour.style.transform = `rotate(${hourrotation}deg)`;
    Minute.style.transform = `rotate(${minuterotation}deg)`;
    Second.style.transform = `rotate(${secondrotation}deg)`;


}, 1000);