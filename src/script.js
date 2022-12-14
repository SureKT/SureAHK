// VARIABLES
const infoDiv = document.querySelector(".info");
var keys = document.querySelectorAll('.key');
var key;

// SOUNDS
// const sounds = [
//   new Audio("key1.mp3"),
//   new Audio("key2.mp3")
// ];

// const keyPlay = () => {
//   const n = Math.random() * 1;
//   const i = n > 0.96 ? 1 : ~~n;
//   sounds[i].currentTime = 0;
//   sounds[i].play();
// };

// KEYDOWN
addEventListener("keydown", (ev) => {
  const key = ev.code.toLowerCase();
  const keyDiv = document.querySelector(`#${key}`) ?? null;

  // (American keyboard: disable ñ, etc...)
  if (!keyDiv) { return; }

  if (key === "f4") {
    document.querySelector(".keyboard").classList.toggle("led");
  }

  if ((key === "numlock") || (key === "capslock") || (key === "scrolllock")) {
    const ledDiv = document.querySelector(`.led.${key}`);
    ledDiv.classList.toggle("on");
  }

  // Pressed key
  keyDiv.classList.add("pressed");
  keyPlay();
  infoDiv.textContent = `Se ha pulsado la tecla '${key}' ${ev.key} (${ev.keyCode})`;
});

// KEYUP
addEventListener("keyup", (ev) => {
  const key = ev.code.toLowerCase();
  const keyDiv = document.querySelector(`#${key}`) ?? null;

  // (American keyboard: disable ñ, etc...)
  if (!keyDiv) { return; }

  keyDiv.classList.remove("pressed");
});

// MOUSEOVER
addEventListener("mouseover", (ev) => {
  for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('mouseenter', function (e) {
      key = document.querySelector('.key:hover');

      infoDiv.textContent = key.id;
      key.classList.add("pressed");
    });
    keys[i].addEventListener('mouseleave', function (e) {
      key.classList.remove("pressed");
    });
  }
});

// COLOR THEME
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);