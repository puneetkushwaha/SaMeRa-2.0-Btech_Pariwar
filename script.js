// Function to generate random floating bubbles
function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
  
    // Set a random horizontal starting position
    const randomX = Math.random();
    bubble.style.setProperty("--random-x", randomX);
  
    // Add the bubble to the container
    document.getElementById("bubbles-container").appendChild(bubble);
  
    // Remove the bubble after it floats off-screen
    setTimeout(() => {
      bubble.remove();
    }, 10000); // Adjust the duration to match the animation duration
  }
  
  // Create bubbles every 500ms
  setInterval(createBubble, 500);
  