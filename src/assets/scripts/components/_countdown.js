(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let birthday = document.getElementById('countdown').getAttribute('data-date'),
        countdownDate = new Date(birthday),
        countDown = countdownDate.getTime(),
        x = setInterval(function () {

            let todayDate = new Date(),
                now = todayDate.getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            // when date is reached
            if (distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown"),
                    content = document.getElementById("content");

                // it is the same day still
                if ((todayDate.getMonth() === countdownDate.getMonth()) && (todayDate.getDate() === countdownDate.getDate())) {
                    headline.innerText = "Four! Event Underway!";
                } else {
                    headline.innerText = "Four! Event Over - Till Next Time!";
                }

                
                countdown.style.display = "none";
                content.style.display = "block";

                clearInterval(x);
            }
            //seconds
        }, 0)
}());