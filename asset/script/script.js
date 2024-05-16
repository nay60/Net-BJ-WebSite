const buttonplay = document.querySelector('.button-play')    
const video = document.querySelector('.video');

buttonplay.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        buttonplay.innerHTML = 'Pause';}
    else {
        video.pause();
        buttonplay.innerHTML = 'Play';}
     
});

video.addEventListener('ended', function() {
    video.currentTime = 0;
    video.play();
    buttonplay.innerHTML = 'Pause';
});

