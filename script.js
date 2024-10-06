const symbols = ['🍒', 'PACA', '🍉', '⭐', '🍇'];

function spin() {
    const reels = [document.getElementById('reel1'), document.getElementById('reel2'), document.getElementById('reel3')];

    reels.forEach(reel => {
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        reel.textContent = randomSymbol; // Set random symbol
        reel.style.animation = 'spin 0.5s'; // Set animation
    });

    // Reset animation after it finishes
    setTimeout(() => {
        reels.forEach(reel => {
            reel.style.animation = 'none'; // Reset the animation
        });
    }, 500); // Match this with the duration of the spin
}
