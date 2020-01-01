const second = document.getElementsByClassName('second');

const today = new Date();

console.log(today.getSeconds());

for (let i = 1; i < 60; i++ ) {
  console.log(doSetTimeout(i));
}

function doSetTimeout(i) {
  return setTimeout(() => i, 1000)
}

// get initial hours, mins and seconds
// 360/60
// 15*6


function getInitialSeconds() {
  return today.getSeconds() * 6 + 'deg'
}

console.log(getInitialSeconds());

second[0].style.webkitTransform = `rotate(${getInitialSeconds()})`
