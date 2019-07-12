const sir = { x: 0, y: 0 };
const spikes = {};

const droppingSpike = (x, y) => {
  if (x < 0 || y < 0 || x > 50 || y > 50) {
    return false;
  }
  return true;
};


const onScreen = (x, y) => {
  if (!droppingSpike(x, y)) {
    return false;
  }
  return true;
};

function moveSir() {
    const sirMove = document.querySelector('.baby');
    // sirMove.x = 100;
  sirMove.style.left = `${(sir.x * 20).toString()}px`;
//   sirMove.style.top = `${(sir.y * 20).toString()}px`;
}

function moveLeft() {
  if (onScreen(sir.x - 1, sir.y)) {
    sir.x -= 1;
    moveSir(sir.x, sir.y);
  }
}
function moveRight() {
  if (onScreen(sir.x + 1, sir.y)) {
    sir.x += 1;
    moveSir(sir.x, sir.y);
  }
}

function fireBall() {
  const spike = document.getElementById('fireball');

  let pos = 0;
  const dropFireBall = setInterval(drop, 1);
  function drop() {
    if (pos == 1000) {
      clearInterval(dropFireBall);
    } else {
      pos++;
      spike.style.top = `${pos}px`;
    }
  }
}
setInterval(fireBall,4000);
window.addEventListener('keydown', (evt) => {
  if ([37, 39].includes(evt.keyCode)) {
    evt.preventDefault();
  }
  switch (evt.keyCode) {
    case 37:
      moveLeft();
      break;
    case 39:
      moveRight();
      break;
  }
});


fireBall();
