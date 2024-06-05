
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

const cards = document.querySelectorAll('.wecontent div');

cards.forEach(card => {
    card.style.transition = 'transform 0.2s'; 

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = x - centerX;
        const deltaY = y - centerY;
        const rotateX = deltaY / 20; 
        const rotateY = -deltaX / 20; 
        
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0) rotateY(0)';
    });
});







