const clock = document.querySelector("h2#clock");
const today = document.querySelector("h2#date");

function getTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var strTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    clock.innerText = strTime;
}

function getDate() {
    const date = new Date();
    const year = String(date.getFullYear());
    const options = { month: "long", timeZone: "UTC" };
    const monthName = date.toLocaleString("en-US", options);
    let day = String(date.getDate());
    if (day.at(-1) == 1) {
        day = `${day}st`;
    } else if (day.at(-1) == 2) {
        day = `${day}nd`;
    } else if (day.at(-1) == 3) {
        day = `${day}rd`;
    } else {
        day = `${day}th`;
    }
    today.innerText = `${monthName}, ${day} ${year}`;
}

getDate();
getTime();
setInterval(getTime, 1000);
