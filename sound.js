
function playSound() {
  const KEYCODE = this.getAttribute('data-key');
  const AUDIO = document.querySelector(`audio[data-key="${KEYCODE}"]`);
  AUDIO.currentTime = 0; 
  AUDIO.play();
}

const KEYS = document.querySelectorAll(".key");
KEYS.forEach(KEY => KEY.addEventListener('click', playSound));
