function playSound (e){
    const AUDIO = document.querySelector(`AUDIO[data-key="${e.keyCode}"]`);
    const KEY = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!AUDIO) return; // stop the function from running all together

    AUDIO.currentTime = 0; // rewind to the start
    AUDIO.play();

    KEY.classList.add('playing');
  }
  

  function removeTransition (e){
    if (e.propertyName !== 'transform') return; // skip if it's not a transform
    this.classList.remove("playing");

  }

  const KEYS = document.querySelectorAll(".key");
  KEYS.forEach(KEY => KEY.addEventListener('transitionend', removeTransition));

  window.addEventListener('keydown', playSound);