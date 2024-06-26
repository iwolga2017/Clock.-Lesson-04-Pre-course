let timerId; // переменная, которая будет хранить ID таймера

const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {

    startButton.disabled = true;
    stopButton.disabled = false;
    timerId = setInterval(updateClock, 1000)
    // запускаем  updateClock() каждую секунду
});

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
    
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(timerId); // останавливаем таймер
});

function updateClock() {

    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}