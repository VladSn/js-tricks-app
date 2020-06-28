// get canvas and context and store it
const canvas = document.getElementById("sky");
const ctx = canvas.getContext("2d");

// set canvas dims to the window height and width
const W = document.documentElement.clientWidth * 0.99;
const H = document.documentElement.clientHeight * 0.99;
canvas.width = W;
canvas.height = H;

// generate the snowflakes and apply attributes
const mf = 150;
const flakes = [];

// loop though the empty flakes and apply attributes
for (let i = 0; i < mf; i++) {
  flakes.push({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 5 + 2, // min of 2px and max of 7px
    d: Math.random() + 1, // density of the flake
  });
}

// draw flakes onto canvas
export function drawFlakes() {
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let i = 0; i < mf; i++) {
    let f = flakes[i];
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  moveFlakes();
}

// animate the flakes
let angle = 0;

function moveFlakes() {
  angle += 0.1;
  for (let i = 0; i < mf; i++) {
    let f = flakes[i];
    f.y += Math.pow(f.d, 2) + 1;
    f.x += Math.sin(angle) * 2;

    if (f.y > H) {
      flakes[i] = {
        x: Math.random() * W,
        y: Math.random() * H,
        r: f.r,
        d: f.d,
      };
    }
  }
}
