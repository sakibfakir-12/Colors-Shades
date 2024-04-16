function playSound() {
            var audio = document.getElementById("clickSound");
            audio.play();
        }

// ...................................................        
// ..................................................
document.addEventListener("DOMContentLoaded", function() {
  const circles = document.querySelectorAll('.circle');

  circles.forEach(circle => {
    circle.addEventListener('click', function() {
      // Get the background color of the clicked circle
      let circleColor = window.getComputedStyle(circle).getPropertyValue('background-color');

      // Get a random shade color based on the circle's color
      let shadeColor = getRandomShadeColor(circleColor);

      // Set the website's background color to the shade color
      document.body.style.backgroundColor = shadeColor;
    });
  });

  function getRandomShadeColor(color) {
    // Extract the RGB values from the color
    let [r, g, b] = color.match(/\d+/g).map(Number);

    // Generate random values to alter the original color
    let shadeFactor = 0.2; // Adjust this factor to control the darkness/lightness of the shade
    let randomFactor = Math.random() * shadeFactor;
    let sign = Math.random() < 0.5 ? -1 : 1;

    // Alter the RGB values to create a shade color
    let shadedR = Math.round(Math.max(0, Math.min(255, r + sign * r * randomFactor)));
    let shadedG = Math.round(Math.max(0, Math.min(255, g + sign * g * randomFactor)));
    let shadedB = Math.round(Math.max(0, Math.min(255, b + sign * b * randomFactor)));

    // Return the shade color in RGB format
    return `rgb(${shadedR}, ${shadedG}, ${shadedB})`;
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const circles = document.querySelectorAll('.circle');

  circles.forEach(circle => {
    circle.addEventListener('click', function() {
      // Get the background color of the clicked circle
      let circleColor = window.getComputedStyle(circle).getPropertyValue('background-color');

      // Get a random shade color based on the circle's color
      let shadeColor = getRandomShadeColor(circleColor);

      // Set the website's background color to the shade color
      document.body.style.backgroundColor = shadeColor;
    });
  });

  function getRandomShadeColor(color) {
    // Extract the RGB values from the color
    let [r, g, b] = color.match(/\d+/g).map(Number);

    // Generate random values to alter the original color
    let shadeFactor = 0.2; // Adjust this factor to control the darkness/lightness of the shade
    let randomFactor = Math.random() * shadeFactor;
    let sign = Math.random() < 0.5 ? -1 : 1;

    // Alter the RGB values to create a shade color
    let shadedR = Math.round(Math.max(0, Math.min(255, r + sign * r * randomFactor)));
    let shadedG = Math.round(Math.max(0, Math.min(255, g + sign * g * randomFactor)));
    let shadedB = Math.round(Math.max(0, Math.min(255, b + sign * b * randomFactor)));

    // Return the shade color in RGB format
    return `rgb(${shadedR}, ${shadedG}, ${shadedB})`;
  }
});
// ..............................................
