@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.reel {
    width: 100px;
    height: 100px;
    border: 2px solid black;
    display: inline-block;
    font-size: 24px;
    text-align: center;
    vertical-align: middle;
    line-height: 100px;
    animation: none; /* Start without animation */
}
body {
    display: flex;
    justify-content: center;  /* Centers content horizontally */
    align-items: center;      /* Centers content vertically */
    height: 100vh;            /* Full viewport height */
    margin: 0;                /* Remove default margin */
}

.slot-machine {
    text-align: center;       /* Center text inside the slot machine */
}
.slot-machine {
    text-align: center;       /* Center text inside the slot machine */
    border: 4px solid black;  /* Add border around the slot machine */
    padding: 20px;            /* Add some padding inside the border */
    border-radius: 10px;      /* Optional: Rounded corners */
    background-color: #f9f9f9; /* Optional: Background color */
}
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0; /* Light background color */
}

.slot-machine {
    text-align: center;
    border: 4px solid black;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff; /* White background for the slot machine */
}

.reel {
    width: 100px;
    height: 100px;
    border: 2px solid #333; /* Dark border around reels */
    display: inline-block;
    font-size: 24px;
    text-align: center;
    vertical-align: middle;
    line-height: 100px;
    animation: none;
    background-color: #e0e0e0; /* Light grey background for reels */
}
.prizes {
    margin-top: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

th, td {
    border: 1px solid #333;
    padding: 10px;
    text-align: center;
}

th {
    background-color: #ddd; /* Header background color */
}

