function getKey() {
  const el = document.getElementsByClassName('key');
  el[0].addEventListener('click', playSound);
}

getKey();


function playSound(e) {
  const {key} = e.currentTarget.dataset
  console.log('play sound');
}

// need to get the correct key onclick to play a sound
