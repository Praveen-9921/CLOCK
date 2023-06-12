let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');
let second = document.querySelector('#second');

console.log(hour, minute, second);

// const currentDate = new Date().toISOString().substr(0, 10);
// hour.value = currentDate;
function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    if (hours < "10") {
        hour.value = "0" + hours;
    } else {
        hour.value = hours;
    }

    if (minutes < "10") {
        minute.value = "0" + minutes;
    } else {
        minute.value = minutes;
    }

    if (seconds < "10") {
        second.value = "0" + seconds;
    } else {
        second.value = seconds;
    }

}

setInterval(updateTime, 1000);