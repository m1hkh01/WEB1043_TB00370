var countDownDate = new Date("Aug 16, 2024 23:59:59").getTime();

function formatNumber(num) {
    return num < 10 ? "0" + num : num;
}

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    hours = formatNumber(hours);
    minutes = formatNumber(minutes);
    seconds = formatNumber(seconds);

    document.getElementById("countdown").innerHTML = "Giảm giá còn lại: " + days + " ngày " + hours + ":" + minutes + ":" + seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Giảm giá đã kết thúc";
    }
}, 1000);
