// Keep track of click count
let clickCount = 0;

// Event listener for the rectangle click
document.getElementById('rectangle').addEventListener('click', function() {
    if (clickCount === 0) {
        // First click: Trigger Teddy2 visibility and fade-in effect
        document.getElementById('teddy2').classList.add('teddy2-visible');
        setTimeout(function() {
            document.getElementById('rectangle').classList.add('rectangle-rotate-color');
        }, 500); // Delay for the rotation effect
    } else if (clickCount === 1) {
        // Second click: Trigger the shake and flash effect
        document.getElementById('rectangle').classList.remove('rectangle-fade-in');
        setTimeout(function() {
            document.getElementById('rectangle').classList.add('rectangle-shake-flash');
        }, 500);
    } else if (clickCount === 2) {
        // Third click: Make Teddy2 appear from bottom to top and reset other effects
        document.getElementById('rectangle').classList.remove('rectangle-rotate-color', 'rectangle-shake-flash');
        document.getElementById('teddy2').classList.add('teddy2-appear');
        
        // Resetting rectangle to its initial state after animation
        setTimeout(function() {
            document.getElementById('rectangle').classList.remove('rectangle-fade-in');
        }, 1000); // Duration of the Teddy2 appear animation
    }

    clickCount++;
});
