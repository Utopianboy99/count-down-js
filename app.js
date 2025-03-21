const countDown = () => {
    const countDate = new Date("June 29, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;


    // How time works

    const second = 1000;
    const minute = second * 60; 
    const hour = minute * 60;
    const day = hour * 24;

    // Calculate the time

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;
};

setInterval(countDown, 1000);