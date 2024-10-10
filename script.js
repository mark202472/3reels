const symbols = ["🍒", "🍋", "🍉", "⭐", "🦙"]; // Slot symbols

let totalCoins = 0; // Track total coins won
let clickCount = 0;
const maxClicks = 50;
const resetTime = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
let lastReset = localStorage.getItem('lastReset') ? parseInt(localStorage.getItem('lastReset')) : 0;

function spin() {
    const reels = [document.getElementById('reel1'), document.getElementById('reel2'), document.getElementById('reel3')];
    const results = [];

    reels.forEach(reel => {
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        reel.textContent = randomSymbol; // Set random symbol
        results.push(randomSymbol); // Store the result
        reel.style.animation = 'spin 0.5s'; // Set animation
    });

    console.log("Results: ", results);

    // Check for winnings
    if (results[0] === results[1] && results[1] === results[2]) {
        const winningSymbol = results[0];
        let prize = 0;

        switch (winningSymbol) {
            case '🍒': prize = 10; break;
            case '🍋': prize = 20; break;
            case '🍉': prize = 50; break;
            case '⭐': prize = 100; break;
            case '🦙': prize = 500; break;
        }

        totalCoins += prize;
        updateTotalCoinsDisplay();
        console.log("Winning: ", { symbol: winningSymbol, prize: prize });
        displayWinnings([{ symbol: winningSymbol, prize: prize }]);
        document.getElementById('winSound').play(); // Play win sound if there's a win
    } else {
        console.log("No winnings this time!");
    }

    // Reset animation after it finishes
    setTimeout(() => {
        reels.forEach(reel => {
            reel.style.animation = 'none';
        });
    }, 500); 
}

function displayWinnings(winnings) {
    const winningsTable = document.getElementById('winningsTable');

    winnings.forEach(winning => {
        const newRow = winningsTable.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        cell1.textContent = winning.symbol;
        cell2.textContent = winning.prize;
    });
}

function updateTotalCoinsDisplay() {
    const totalCoinsDisplay = document.getElementById('totalCoinsDisplay');
    totalCoinsDisplay.textContent = `Total Coins Won: ${totalCoins}`;
}

function resetClickCountIfNeeded() {
    const currentTime = Date.now();
    
    if (currentTime - lastReset >= resetTime) {
        clickCount = 0; // Reset the counter
        lastReset = currentTime; // Update the last reset time
        localStorage.setItem('lastReset', lastReset);
        totalCoins = 0; // Reset the total coins won
        updateTotalCoinsDisplay(); // Reset the visual display of total coins
    }
}

function handleClick() {
    resetClickCountIfNeeded();

    if (clickCount < maxClicks) {
        clickCount++;
        document.getElementById('clickCountDisplay').textContent = `Clicks: ${clickCount}`;
        document.getElementById('spinSound').play(); // Play spin sound
        spin(); // Execute spin logic
    } else {
        if (totalCoins > 0) {
            document.getElementById("spinButton").disabled = true; // Disable the spin button after max clicks
            const messageDiv = document.getElementById("maxClickMessage");
            messageDiv.textContent = `You've reached the maximum click limit. Please take a screenshot and send to Mark on Telegram: @Markuk2021`;
            alert(`You've reached the maximum click limit. Please take a screenshot and send to Mark on Telegram: @Markuk2021`);
        } else {
            document.getElementById("maxClickMessage").textContent = "You can refresh the page since you did not win any coins.";
        }
    }
}

document.getElementById('spinButton').addEventListener('click', handleClick);

window.onload = function() {
    resetClickCountIfNeeded();
}

// Prevent keyboard-based refresh (F5, Ctrl+R, Cmd+R)
document.addEventListener('keydown', function (e) {
    if (e.key === 'F5' || (e.ctrlKey && e.key === 'r') || (e.metaKey && e.key === 'r')) {
        e.preventDefault(); // Prevent the default refresh behavior
        alert("Refreshing the page is disabled.");
    }
});

// Warn users if they try to refresh or leave the page manually
window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = ''; // Chrome requires returnValue to be set to show a confirmation dialog
});

// Disable right-click context menu (which can have a refresh option)
document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Prevent the right-click menu from opening
    alert("Right-click is disabled. Please don't try to refresh.");
});

// Fullscreen function to enhance user experience
function goFullscreen() {
    const element = document.documentElement; 
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

goFullscreen();
