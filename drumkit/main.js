function getKey() {
  const el = document.getElementsByClassName('key');
  el[0].addEventListener('click', playSound);
}

getKey();

function playSound(e) {
  e.currentTarget.children[1].play()
}
