const canvas = document.getElementById('canvas');//First, the canvas element is selected from HTML and a 2D drawing context is created.
const ctx = canvas.getContext('2d');//This allows us to draw lines, shapes, and effects on the canvas.

//The canvas size is dynamically adjusted according to screen size.
canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.7;

let painting = false;
let brushColor = document.getElementById('colorPicker').value;
let brushSize = document.getElementById('brushSize').value;

let hue = 0;
let rainbowMode = false;
let glowMode = false;
let eraserMode = false;

// Start drawing
function startPosition(e){
  painting = true;
  ctx.beginPath();
}

// Stop drawing
function endPosition(){
  painting = false;
}

// Draw function
function draw(e){
  if(!painting) return;

  let x = e.clientX - canvas.offsetLeft;
  let y = e.clientY - canvas.offsetTop;

  ctx.lineWidth = brushSize;
  ctx.lineCap = 'round';

  // Modes
  if(eraserMode){
    ctx.strokeStyle = "#000"; // same as background
  } else if(rainbowMode){
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    hue++;
  } else {
    ctx.strokeStyle = brushColor;
  }

  // Glow effect
  if(glowMode){
    ctx.shadowBlur = 15;
    ctx.shadowColor = ctx.strokeStyle;
  } else {
    ctx.shadowBlur = 0;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

// Events
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);

// Controls
document.getElementById('colorPicker')
  .addEventListener('input', e => {
    brushColor = e.target.value;
    rainbowMode = false;
    eraserMode = false;
  });

document.getElementById('brushSize')
  .addEventListener('input', e => brushSize = e.target.value);

// Clear
document.getElementById('clear').addEventListener('click', () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
});

// Save (Download)
document.getElementById('save').addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'art.png';
  link.href = canvas.toDataURL();
  link.click();
});

// Add keyboard shortcuts (this makes it COOL)
document.addEventListener('keydown', (e) => {
  if(e.key === 'r') {
    rainbowMode = true;
    eraserMode = false;
  }
  if(e.key === 'g') {
    glowMode = !glowMode;
  }
  if(e.key === 'e') {
    eraserMode = true;
    rainbowMode = false;
  }
});