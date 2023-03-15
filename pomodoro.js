let minutes = 25;

function countdown() {
if (minutes === 0) {
        document.querySelector('h1').innerHTML = 'Time for a break!';
        document.querySelector('button').disabled = false;
    }
    else {
        minutes--;
        document.querySelector('h1').innerHTML = minutes;
    }
}

document.addEventListener('DOMContentLoaded', function() {

document.querySelector('h1').innerHTML = minutes;

document.querySelector('button').onclick = function() {
    document.querySelector('button').disabled = true;

    setInterval(countdown, 1000); // bug: continues beyond countdowm finishing!
}
})