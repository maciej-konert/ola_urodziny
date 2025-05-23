document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('birthday-button');
    const announcement = document.getElementById('announcement');
    const confettiContainer = document.getElementById('confetti-container');
    const title = document.getElementById('title');
    
    button.addEventListener('click', function() {
        // Show the birthday announcement
        announcement.classList.add('show');
        
        // Update the title
        title.textContent = '🎉 NIESPODZIANKA! 🎉';
        
        // Create confetti explosion
        createConfetti();
        
        // Play celebration sound effect (optional - browser will handle gracefully if no sound)
        try {
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmkdBz2V2e/WdCEFLojX8NiCMwYcb8Hr56tdFAY');
            audio.play().catch(() => {}); // Ignore errors
        } catch(e) {}
        
        // Change button text
        button.textContent = '🎊 Więcej konfetti! 🎊';
        
        // Continue creating confetti for a while
        let confettiInterval = setInterval(() => {
            createConfetti();
        }, 500);
        
        // Stop confetti after 10 seconds
        setTimeout(() => {
            clearInterval(confettiInterval);
        }, 10000);
    });
    
    function createConfetti() {
        const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a8e6cf', '#ff8b94', '#95e1d3', '#fce38a', '#ff9ff3'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                createConfettiPiece(colors);
            }, i * 50);
        }
    }
    
    function createConfettiPiece(colors) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Random color
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random size
        const size = Math.random() * 8 + 4;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        
        // Random starting position
        confetti.style.left = Math.random() * 100 + '%';
        
        // Random animation duration
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        // Random delay
        confetti.style.animationDelay = Math.random() * 2 + 's';
        
        confettiContainer.appendChild(confetti);
        
        // Remove confetti piece after animation
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 5000);
    }
    
    // Add some initial sparkle effect
    function addSparkles() {
        const sparkleInterval = setInterval(() => {
            if (Math.random() < 0.3) {
                createSparkle();
            }
        }, 1000);
        
        // Stop sparkles after button is clicked
        button.addEventListener('click', () => {
            clearInterval(sparkleInterval);
        }, { once: true });
    }
    
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'absolute';
        sparkle.style.width = '4px';
        sparkle.style.height = '4px';
        sparkle.style.backgroundColor = '#fff';
        sparkle.style.borderRadius = '50%';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animation = 'sparkle 1s ease-out forwards';
        sparkle.style.pointerEvents = 'none';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 1000);
    }
    
    // Add sparkle animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0% {
                opacity: 0;
                transform: scale(0);
            }
            50% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Start the sparkle effect
    addSparkles();
});