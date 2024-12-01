// Set the date for Tulika's birthday
var birthdayDate = new Date("Dec 31, 2024 00:00:00").getTime();

// Update the countdown every second
var countdownTimer = setInterval(function() {
    var now = new Date().getTime();
    var distance = birthdayDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    // Display the countdown
    document.getElementById("birthdayCountdown").innerHTML = days + " days left until Tulika's Birthday!";

    // If the countdown is over
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("birthdayCountdown").innerHTML = "Happy Birthday, Tulika!";
    }
}, 1000);
