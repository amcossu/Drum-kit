function playSound() {
  let keyCode = this.getAttribute('data-key');
  let sound = document.querySelector(`audio[data-key="${keyCode}"]`);
  sound.currentTime = 0; 
  sound.play();
}

const KEYS = document.querySelectorAll(".key");
KEYS.forEach(KEY => KEY.addEventListener('click', playSound));
