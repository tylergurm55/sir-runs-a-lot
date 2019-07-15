const sir = { x: 18*40, y: 520, width: 100, height: 100 };
const fireballSize = { width: 75, height: 75 };
const fireballs = {};
// let player;
// const spikes = {};


const droppingFire = (x, y) => {
  if (x < 0 || x > 30*45) {
    return false;
  }
  return true;
};


const onScreen = (x, y) => {
  if (!droppingFire(x, y)) {
    return false;
  }
  return true;
};

function moveSir() {
  const sirMove = document.querySelector('.baby');
  sirMove.style.top = `${sir.y}px`;
  sirMove.style.left = `${(sir.x).toString()}px`;
//   sirMove.style.top = `${(sir.y * 0).toString()}px`;
}

function moveLeft() {
  if (onScreen(sir.x - 70, sir.y)) {
    sir.x -= 70;
    moveSir(sir.x, sir.y);
  }
}
function moveRight() {
    if (onScreen(sir.x + 70, sir.y)) {
    sir.x += 70;
    moveSir(sir.x, sir.y);
  }
}








window.addEventListener('keydown', (evt) => {
  if ([65, 13].includes(evt.keyCode)) {
    evt.preventDefault();
  }
  switch (evt.keyCode) {
    case 65:
      moveLeft();
      break;
    case 13:
      moveRight();
      break;
  }
});

  

  const fire1 = () => {
    const fireball = document.createElement('div');
    fireball.classList.add('fireball');
    const x = Math.random() * 1400;
    fireball.style.left = `${x}px`;
    document.querySelector('.gameboard').appendChild(fireball);
    fireballs.one = {
        x,
        y: 0,
        width: 75,
        height: 75,
    };
  
    const fireballInterval = setInterval(
      () => {
        if (fireballs.one.y === 625) {
          fireball.remove();
          clearInterval(fireballInterval);
        } else {
          fireballs.one.y += 1;
          fireball.style.top = `${fireballs.one.y}px`;
        }
        
      },
      // 1,
    );
    
}
setInterval(fire1,4250);


const fire2 = () => {
    const fireball = document.createElement('div');
    fireball.classList.add('fireball');
    const x = Math.random() * 1400;
    fireball.style.left = `${x}px`;
    document.querySelector('.gameboard').appendChild(fireball);
    fireballs.two = {
        x,
        y: 0,
        width: 75,
        height: 75,
    };
  
     const fireballInterval = setInterval(
      () => {
        if (fireballs.two.y === 700) {
          fireball.remove();
          clearInterval(fireballInterval);
        } else {
          fireballs.two.y += 1
          fireball.style.top = `${fireballs.two.y}px`;
        }
    },
      // 1,
    );
    
}
setInterval(fire2,1700);

const fire3 = () => {
    const fireball = document.createElement('div');
    fireball.classList.add('fireball');
    const x = Math.random() * 1400;
    fireball.style.left = `${x}px`;
    document.querySelector('.gameboard').appendChild(fireball);
    fireballs.three = {
        x,
        y: 0,
        width: 75,
        height: 75,
    };
  
    const fireballInterval = setInterval(
      () => {
        if (fireballs.three.y === 650) {
          fireball.remove();
          clearInterval(fireballInterval);
        } else {
          fireballs.three.y += 1;
          fireball.style.top = `${fireballs.three.y}px`;
        }
      },
      // 1,
    );
    
}
setInterval(fire3,3300);


const fire4 = () => {
  const fireball = document.createElement('div');
  fireball.classList.add('fireball');
  const x = Math.random() * 1400;
  fireball.style.left = `${x}px`;
  document.querySelector('.gameboard').appendChild(fireball);
  fireballs.four = {
      x,
      y: 0,
      width: 75,
      height: 75,
  };

  const fireballInterval = setInterval(
    () => {
      if (fireballs.four.y === 625) {
        fireball.remove();
        clearInterval(fireballInterval);
      } else {
        fireballs.four.y += 1;
        fireball.style.top = `${fireballs.four.y}px`;
      }
    },
    // 1,
  );
  
}
setInterval(fire4,4750);

const fire5 = () => {
  const fireball = document.createElement('div');
  fireball.classList.add('fireball');
  const x = Math.random() * 1400;
  fireball.style.left = `${x}px`;
  document.querySelector('.gameboard').appendChild(fireball);
  fireballs.five = {
      x,
      y: 0,
      width: 75,
      height: 75,
  };

  const fireballInterval = setInterval(
    () => {
      if (fireballs.five.y === 625) {
        fireball.remove();
        clearInterval(fireballInterval);
      } else {
        fireballs.five.y += 1;
        fireball.style.top = `${fireballs.five.y}px`;
      }
    },
    // 1,
  );
  
}
setInterval(fire5,4250);

const fire6 = () => {
  const fireball = document.createElement('div');
  fireball.classList.add('fireball');
  const x = Math.random() * 1400;
  fireball.style.left = `${x}px`;
  document.querySelector('.gameboard').appendChild(fireball);
  fireballs.six = {
      x,
      y: 0,
      width: 75,
      height: 75,
  };

  const fireballInterval = setInterval(
    () => {
      if (fireballs.six.y === 625) {
        fireball.remove();
        clearInterval(fireballInterval);
      } else {
        fireballs.six.y += 1;
        fireball.style.top = `${fireballs.six.y}px`;
      }
    },
    // 1,
  );
  
}
setInterval(fire6,1800);

const fire7 = () => {
  const fireball = document.createElement('div');
  fireball.classList.add('fireball');
  const x = Math.random() * 1400;
  fireball.style.left = `${x}px`;
  document.querySelector('.gameboard').appendChild(fireball);
  fireballs.seven = {
      x,
      y: 0,
      width: 75,
      height: 75,
  };

  const fireballInterval = setInterval(
    () => {
      if (fireballs.seven.y === 625) {
        fireball.remove();
        clearInterval(fireballInterval);
      } else {
        fireballs.seven.y += 1;
        fireball.style.top = `${fireballs.seven.y}px`;
      }
    },
    // 1,
  );
  
}
setInterval(fire7,3789);

const fire8 = () => {
  const fireball = document.createElement('div');
  fireball.classList.add('fireball');
  const x = Math.random() * 1400;
  fireball.style.left = `${x}px`;
  document.querySelector('.gameboard').appendChild(fireball);
  fireballs.eight = {
      x,
      y: 0,
      width: 75,
      height: 75,
  };

  const fireballInterval = setInterval(
    () => {
      if (fireballs.eight.y === 625) {
        fireball.remove();
        clearInterval(fireballInterval);
      } else {
        fireballs.eight.y += 1;
        fireball.style.top = `${fireballs.eight.y}px`;
      }
    },
    // 1,
  );
  
}
setInterval(fire8,2500);

const fire9 = () => {
  const fireball = document.createElement('div');
  fireball.classList.add('fireball');
  const x = Math.random() * 1400;
  fireball.style.left = `${x}px`;
  document.querySelector('.gameboard').appendChild(fireball);
  fireballs.nine = {
      x,
      y: 0,
      width: 75,
      height: 75,
  };

  const fireballInterval = setInterval(
    () => {
      if (fireballs.nine.y === 625) {
        fireball.remove();
        clearInterval(fireballInterval);
      } else {
        fireballs.nine.y += 1;
        fireball.style.top = `${fireballs.nine.y}px`;
      }
    },
    // 1,
  );
  
}
setInterval(fire9,5000);

const fire10 = () => {
  const fireball = document.createElement('div');
  fireball.classList.add('fireball');
  const x = Math.random() * 1400;
  fireball.style.left = `${x}px`;
  document.querySelector('.gameboard').appendChild(fireball);
  fireballs.ten = {
      x,
      y: 0,
      width: 75,
      height: 75,
  };

  const fireballInterval = setInterval(
    () => {
      if (fireballs.ten.y === 625) {
        fireball.remove();
        clearInterval(fireballInterval);
      } else {
        fireballs.ten.y += 1;
        fireball.style.top = `${fireballs.ten.y}px`;
      }
    },
    // 1,
  );
  
}
setInterval(fire10,4550);

const fire11 = () => {
  const fireball = document.createElement('div');
  fireball.classList.add('fireball');
  const x = Math.random() * 1400;
  fireball.style.left = `${x}px`;
  document.querySelector('.gameboard').appendChild(fireball);
  fireballs.ele = {
      x,
      y: 0,
      width: 75,
      height: 75,
  };

  const fireballInterval = setInterval(
    () => {
      if (fireballs.ele.y === 625) {
        fireball.remove();
        clearInterval(fireballInterval);
      } else {
        fireballs.ele.y += 1;
        fireball.style.top = `${fireballs.ele.y}px`;
      }
    },
    // 1,
  );
  
}
setInterval(fire11,4750);

const fire12 = () => {
  const fireball = document.createElement('div');
  fireball.classList.add('fireball');
  const x = Math.random() * 1400;
  fireball.style.left = `${x}px`;
  document.querySelector('.gameboard').appendChild(fireball);
  fireballs.twe = {
      x,
      y: 0,
      width: 75,
      height: 75,
  };

  const fireballInterval = setInterval(
    () => {
      if (fireballs.twe.y === 625) {
        fireball.remove();
        clearInterval(fireballInterval);
      } else {
        fireballs.twe.y += 1;
        fireball.style.top = `${fireballs.twe.y}px`;
      }
    },
    1,
  );
  
}
setInterval(fire12,4100);


  
const fire13 = () => {
  const fireball = document.createElement('div');
  fireball.classList.add('fireball');
  const x = Math.random() * 1400;
  fireball.style.left = `${x}px`;
  document.querySelector('.gameboard').appendChild(fireball);
  fireballs.thir = {
      x,
      y: 0,
      width: 75,
      height: 75,
  };

  const fireballInterval = setInterval(
    () => {
      if (fireballs.thir.y === 625) {
        fireball.remove();
        clearInterval(fireballInterval);
      } else {
        fireballs.thir.y += 1;
        fireball.style.top = `${fireballs.thir.y}px`;
      }
    },
    1,
  );
  
}
setInterval(fire13,5000);

const fire14 = () => {
  const fireball = document.createElement('div');
  fireball.classList.add('fireball');
  const x = Math.random() * 1400;
  fireball.style.left = `${x}px`;
  document.querySelector('.gameboard').appendChild(fireball);
  fireballs.fourt = {
      x,
      y: 0,
      width: 75,
      height: 75,
  };

  const fireballInterval = setInterval(
    () => {
      if (fireballs.fourt.y === 625) {
        fireball.remove();
        clearInterval(fireballInterval);
      } else {
        fireballs.fourt.y += 1;
        fireball.style.top = `${fireballs.fourt.y}px`;
      }
    },
    1,
  );
  
}
setInterval(fire14,5000);

const fire15 = () => {
  const fireball = document.createElement('div');
  fireball.classList.add('fireball');
  const x = Math.random() * 1400;
  fireball.style.left = `${x}px`;
  document.querySelector('.gameboard').appendChild(fireball);
  fireballs.fift = {
      x,
      y: 0,
      width: 75,
      height: 75,
  };

  const fireballInterval = setInterval(
    () => {
      if (fireballs.fift.y === 625) {
        fireball.remove();
        clearInterval(fireballInterval);
      } else {
        fireballs.fift.y += 1;
        fireball.style.top = `${fireballs.fift.y}px`;
      }
    },
    1,
  );
  
}
setInterval(fire15,5200);

const fire16 = () => {
  const fireball = document.createElement('div');
  fireball.classList.add('fireball');
  const x = Math.random() * 1400;
  fireball.style.left = `${x}px`;
  document.querySelector('.gameboard').appendChild(fireball);
  fireballs.sixt = {
      x,
      y: 0,
      width: 75,
      height: 75,
  };

  const fireballInterval = setInterval(
    () => {
      if (fireballs.sixt.y === 625) {
        fireball.remove();
        clearInterval(fireballInterval);
      } else {
        fireballs.sixt.y += 1;
        fireball.style.top = `${fireballs.sixt.y}px`;
      }
    },
    1,
  );
  
}
setInterval(fire16,4200);

const fire17 = () => {
  const fireball = document.createElement('div');
  fireball.classList.add('fireball');
  const x = Math.random() * 1400;
  fireball.style.left = `${x}px`;
  document.querySelector('.gameboard').appendChild(fireball);
  fireballs.sevt = {
      x,
      y: 0,
      width: 75,
      height: 75,
  };

  const fireballInterval = setInterval(
    () => {
      if (fireballs.sevt.y === 625) {
        fireball.remove();
        clearInterval(fireballInterval);
      } else {
        fireballs.sevt.y += 1;
        fireball.style.top = `${fireballs.sevt.y}px`;
      }
    },
    1,
  );
  
}
setInterval(fire17,4000);

const fire18 = () => {
  const fireball = document.createElement('div');
  fireball.classList.add('fireball');
  const x = Math.random() * 1400;
  fireball.style.left = `${x}px`;
  document.querySelector('.gameboard').appendChild(fireball);
  fireballs.ate = {
      x,
      y: 0,
      width: 75,
      height: 75,
  };

  const fireballInterval = setInterval(
    () => {
      if (fireballs.ate.y === 625) {
        fireball.remove();
        clearInterval(fireballInterval);
      } else {
        fireballs.ate.y += 1;
        fireball.style.top = `${fireballs.ate.y}px`;
      }
    },
    1,
  );
  
}
setInterval(fire18,2000);