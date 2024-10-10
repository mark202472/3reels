const symbols = ["🍒", "🍋", "🍉", "⭐", "🦙"]; // Already includes "Paca"

let totalCoins = 0; // Track total coins won
let clickCount = 0;
const maxClicks = 50;
const resetTime = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
let lastReset = localStorage.getItem('lastReset') ? parseInt(localStorage.getItem('lastReset')) : 0;

function spin() {
    const reels = [document.getElementById('reel1'), document.getElementById('reel2'), document.getElementById('reel3')];
    const results = []; // Array to store results

    reels.forEach(reel => {
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        reel.textContent = randomSymbol; // Set random symbol
        results.push(randomSymbol); // Store the result
        reel.style.animation = 'spin 0.5s'; // Set animation
    });

    console.log("Results: ", results); // Debugging line

    // Check for winnings
    if (results[0] === results[1] && results[1] === results[2]) {
        const winningSymbol = results[0];
        let prize = 0;

        // Determine prize based on the symbol
        switch (winningSymbol) {
            case '🍒': prize = 10; break;
            case '🍋': prize = 20; break;
            case '🍉': prize = 50; break;
            case '⭐': prize = 100; break;
            case '🦙': prize = 500; break;
        }

        totalCoins += prize; // Add the prize to total coins
        updateTotalCoinsDisplay(); // Update visual display of total coins
        console.log("Winning: ", { symbol: winningSymbol, prize: prize }); // Debugging line
        displayWinnings([{ symbol: winningSymbol, prize: prize }]);
        document.getElementById('winSound').play(); // Play win sound if there's a win
    } else {
        console.log("No winnings this time!"); // Debugging line
    }

    // Reset animation after it finishes
    setTimeout(() => {
        reels.forEach(reel => {
            reel.style.animation = 'none'; // Reset the animation
        });
    }, 500); // Match this with the duration of the spin
}

function displayWinnings(winnings) {
    const winningsTable = document.getElementById('winningsTable');

    winnings.forEach(winning => {
        const newRow = winningsTable.insertRow(); // Insert a new row
        const cell1 = newRow.insertCell(0); // Create first cell for symbol
        const cell2 = newRow.insertCell(1); // Create second cell for prize
        cell1.textContent = winning.symbol; // Set the symbol
        cell2.textContent = winning.prize; // Set the prize
    });
}

// Function to update the visual display of total coins
function updateTotalCoinsDisplay() {
    const totalCoinsDisplay = document.getElementById('totalCoinsDisplay');
    totalCoinsDisplay.textContent = `Total Coins Won: ${totalCoins}`;
}

// Sound and click limit handling
function resetClickCountIfNeeded() {
    const currentTime = Date.now();
    
    // Check if 12 hours have passed since the last reset
    if (currentTime - lastReset >= resetTime) {
        clickCount = 0; // Reset the counter
        lastReset = currentTime; // Update the last reset time
        localStorage.setItem('lastReset', lastReset);
        totalCoins = 0; // Reset the total coins won
        updateTotalCoinsDisplay(); // Reset the visual display of total coins
    }
}

function handleClick() {
    resetClickCountIfNeeded(); // Ensure click count is reset if needed

    // Check if the click count has reached the maximum
    if (clickCount < maxClicks) {
        clickCount++;
        console.log(`Click count: ${clickCount}`);
        document.getElementById('spinSound').play(); // Play spin sound
        spin(); // Execute spin logic
    } else {
        // Display total coins won if max clicks reached
        displayTotalCoins();
        console.log("You've reached the maximum click limit.");
        // Optionally, update UI to inform the user
    }
}

// Function to display total coins won after 50 clicks
function displayTotalCoins() {
    // Visually display the total coins
    const totalCoinsDisplay = document.getElementById('totalCoinsDisplay');
    totalCoinsDisplay.textContent = `Total Coins Won: ${totalCoins}`;

    console.log(`Total coins won: ${totalCoins}`);
    alert(`You've reached the maximum click limit. Total coins won: ${totalCoins}`);
}

document.getElementById('yourClickableElementId').addEventListener('click', handleClick);

window.onload = function() {
    resetClickCountIfNeeded(); // Ensure click count is reset on load
};
function handleClick() {
    const currentTime = Date.now();

    // Check if 12 hours have passed since the last reset
    if (currentTime - lastReset >= resetTime) {
        clickCount = 0; // Reset the counter
        lastReset = currentTime; // Update the last reset time
        localStorage.setItem('lastReset', lastReset);
    }

    function handleClick() {
        const currentTime = Date.now();
    
        // Check if 12 hours have passed since the last reset
        if (currentTime - lastReset >= resetTime) {
            clickCount = 0; // Reset the counter
            lastReset = currentTime; // Update the last reset time
            localStorage.setItem('lastReset', lastReset);
        }
    
        // Check if the click count has reached the maximum
        if (clickCount < maxClicks) {
            clickCount++;
            document.getElementById("clickCountDisplay").textContent = `Clicks: ${clickCount}`;
        } else {
            // Display the message in the HTML
            const messageDiv = document.getElementById("maxClickMessage");
            messageDiv.textContent = `You've reached the maximum click limit. Please take a screenshot and send to the link: https://t.me/+7r62MHxy8lU2YWQ0`;
    
            alert(`You've reached the maximum click limit. Please take a screenshot and send to the link: https://t.me/+7r62MHxy8lU2YWQ0`);
            document.querySelector('.spin-button').disabled = true; // Disable the spin button after max clicks
        }
    }
    function handleClick() {
        const currentTime = Date.now();
    
        // Check if 12 hours have passed since the last reset
        if (currentTime - lastReset >= resetTime) {
            clickCount = 0; // Reset the counter
            lastReset = currentTime; // Update the last reset time
            localStorage.setItem('lastReset', lastReset);
        }
    
        // Check if the click count has reached the maximum
        if (clickCount < maxClicks) {
            clickCount++;
            document.getElementById("clickCountDisplay").textContent = `Clicks: ${clickCount}`;
        } else {
            // Set the message in HTML
            const messageDiv = document.getElementById("maxClickMessage");
            messageDiv.textContent = `You've reached the maximum click limit. Please take a screenshot and send to the link: https://t.me/+7r62MHxy8lU2YWQ0`;
    
            // Show the alert
            alert(`You've reached the maximum click limit. Please take a screenshot and send to the link: https://t.me/+7r62MHxy8lU2YWQ0`);
    
            // Optionally disable the spin button
            document.querySelector('.spin-button').disabled = true;
        }
    }
    
    
}
