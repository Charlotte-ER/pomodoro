let minutes = 10;

document.addEventListener('DOMContentLoaded', function() {
    let tomato = document.getElementById('tomato');

    document.querySelector('h1').innerHTML = minutes;

    document.querySelector('button').onclick = function() {
        document.querySelector('button').disabled = true;
        tomato.style.animationPlayState = 'running';

        let countdown = setInterval(function() {
            if (minutes === 0) {
                document.querySelector('h1').innerHTML = 'Time for a break!';
                clearInterval(countdown);
                document.querySelector('button').disabled = false;
            }
            else {
                minutes--;
                document.querySelector('h1').innerHTML = minutes;
            }
        }, 1000);
    }
})