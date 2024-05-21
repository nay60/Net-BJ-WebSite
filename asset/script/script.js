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

document.querySelectorAll(".contact").forEach(function(element) {
    element.addEventListener("click", function() {
        document.querySelector(".popup-box").style.display = "flex";
    });
});

document.querySelector(".exit").addEventListener("click", function() {
    event.preventDefault();
    document.querySelector(".popup-box").style.display = "none";
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelector('.popup-box').style.display = 'none';
    }
});



