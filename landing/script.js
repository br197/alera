/**
 * Credit: ChatGPT
 */

// Array of random texts
const randomTexts = [
  "When I first got my period, I thought I was dying.",
  "I wish we could actually have a safe space to discuss puberty.",
  "We don’t have puberty information in a consistent place.",
  "It felt like a taboo topic.",
  ""
];

//font size
const fontSize= "20px";

// Function to check if there is overlap with existing elements
function checkOverlap(element) {
  const existingElements = document.querySelectorAll(".random-text");
  const rect1 = element.getBoundingClientRect();
  let overlap = false;

  existingElements.forEach(existingElement => {
    const rect2 = existingElement.getBoundingClientRect();
    if (
      rect1.left < rect2.right &&
      rect1.right > rect2.left &&
      rect1.top < rect2.bottom &&
      rect1.bottom > rect2.top
    ) {
      overlap = true;
    }
  });

  return overlap;
}

// Function to generate random text at random location without overlap
function generateRandomText() {
  const text = randomTexts[Math.floor(Math.random() * randomTexts.length)];
  const textElement = document.createElement("div");
  textElement.classList.add("random-text");
  textElement.textContent = text;

  let x, y;
  let overlap = false;
  do {
    // Set random position within available space
    x = Math.random() * ((window.innerWidth-600) - textElement.clientWidth);
    y = Math.random() * ((window.innerHeight+200)  - textElement.clientHeight);

    // Set position
    textElement.style.left = `${x}px`;
    textElement.style.top = `${y}px`;

    // Check for overlap with existing text elements
    overlap = checkOverlap(textElement);
  } while (overlap);

  // Set font size
  textElement.style.fontSize = fontSize;
  textElement.style.color = 'lightpink';
  

  // Append to body
  document.body.appendChild(textElement);

  // Fade out after a certain time
  setTimeout(() => {
    textElement.style.opacity = 0;
    textElement.style.transition = "opacity 1s"; // Add transition for smooth fade-out
    setTimeout(() => {
      textElement.remove();
    }, 1000); // Remove after fade out animation (1 second)
  }, 3000); // Fade out after 3 seconds
}

// Call the function to generate random text periodically
setInterval(generateRandomText, 3000); // Generate every 3 seconds
