const symbols = ['🍒', '🍋', '🍉', '⭐', '🍇']; // Define your symbols

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
            case '🍇': prize = 200; break;
        }

        // Display winnings in the table
        console.log("Winning: ", { symbol: winningSymbol, prize: prize }); // Debugging line
        displayWinnings([{ symbol: winningSymbol, prize: prize }]);
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
