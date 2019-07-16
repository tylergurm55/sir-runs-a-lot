const soundtrack = new Audio('theme song.mp3');
soundtrack.play();

const sir = { x: 18*40, y: 470, width: 100, height: 100 };
const fireballSize = { width: 50, height: 50 };
const fireballs = {};


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

  const fire1 = () => {
    const fireball = document.createElement('div');
    fireball.classList.add('fireball');
    const x = Math.random() * 1400;
    fireball.style.left = `${x}px`;
    document.querySelector('body').appendChild(fireball);
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
      
    );
    
}
setInterval(fire1,4800);

const fire2 = () => {
    const fireball = document.createElement('div');
    fireball.classList.add('fireball');
    const x = Math.random() * 1400;
    fireball.style.left = `${x}px`;
    document.querySelector('body').appendChild(fireball);
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
      
    );
    
}
setInterval(fire2,5500);

const fire3 = () => {
    const fireball = document.createElement('div');
    fireball.classList.add('fireball');
    const x = Math.random() * 1400;
    fireball.style.left = `${x}px`;
    document.querySelector('body').appendChild(fireball);
    fireballs.two = {
        x,
        y: 0,
        width: 50,
        height: 50,
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
      
    );
    
}
setInterval(fire3,5000);

const fire4 = () => {
    const fireball = document.createElement('div');
    fireball.classList.add('fireball');
    const x = Math.random() * 1400;
    fireball.style.left = `${x}px`;
    document.querySelector('body').appendChild(fireball);
    fireballs.two = {
        x,
        y: 0,
        width: 50,
        height: 50,
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
      
    );
    
}
setInterval(fire4,5200);

const fire5 = () => {
    const fireball = document.createElement('div');
    fireball.classList.add('fireball');
    const x = Math.random() * 1400;
    fireball.style.left = `${x}px`;
    document.querySelector('body').appendChild(fireball);
    fireballs.two = {
        x,
        y: 0,
        width: 50,
        height: 50,
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
      
    );
    
}
setInterval(fire5,5700);

const fire6 = () => {
    const fireball = document.createElement('div');
    fireball.classList.add('fireball');
    const x = Math.random() * 1400;
    fireball.style.left = `${x}px`;
    document.querySelector('body').appendChild(fireball);
    fireballs.two = {
        x,
        y: 0,
        width: 50,
        height: 50,
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
      
    );
    
}
setInterval(fire6,4200);


