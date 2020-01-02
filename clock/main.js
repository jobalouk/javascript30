// get initial hours, mins and seconds
// 360/60
// 15*6
// position = hour * 30
// hourOffset = 0.5 * minutes
// position += hourOffset



const today = new Date();
const secondsNode = document.querySelector('.seconds');
const minutesNode = document.querySelector('.minutes');
const hourNode = document.querySelector('.hour');


let hours = today.getHours();
hours = hours % 12;
hours = hours ? hours : 12;

window.onload = function() {
  minutesNode.style.webkitTransform = `rotate(${today.getMinutes() * 6}deg)`;
  secondsNode.style.webkitTransform = `rotate(${today.getSeconds() * 6}deg)`;
  hourNode.style.webkitTransform = `rotate(${hours * 30}deg)`;
}

seconds();

function seconds() {
  let x = today.getSeconds() + 1;
  let y = today.getMinutes();

  setInterval(() => {
      if (x > 60) {
        x = 0;
        y++;

        secondsNode.style.webkitTransform = `rotate(${0}deg)`;
        minutesNode.style.webkitTransform = `rotate(${y * 6}deg)`
        x++;
      }

      secondsNode.style.webkitTransform = `rotate(${x * 6}deg)`;

      x++;
  }, 1000);
}
