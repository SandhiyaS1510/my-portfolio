// Automatic Background Color Change
const colors = ["#ff7f50", "#6a5acd", "#20b2aa", "#ff6347", "#4682b4", "#32cd32"];
let colorIndex = 0;

function changeBackgroundColor() {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length; // Loop back to the start
}

setInterval(changeBackgroundColor, 5000); // Change color every 5 seconds
