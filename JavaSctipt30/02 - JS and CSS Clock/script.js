// const secondHand = document.querySelector(".second-hand");
// const minHand = document.querySelector(".min-hand");
// const hourHand = document.querySelector(".hour-hand");

// function setDate() {
//   const now = new Date();
//   const seconds = now.getSeconds();
//   const secondsDegrees = (seconds / 60) * 360 + 90;
//   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

//   const mins = now.getMinutes();
//   const minutesDegrees = (mins / 60) * 360 + 90;

//   minHand.style.transform = `rotate(${minutesDegrees}deg)`;

//   const hour = now.getHours();
//   const hoursDegrees = (hour / 12) * 360 + 90;

//   hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
// }

// setInterval(setDate, 1000);

const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  //   console.log(seconds);
  //   console.log(secondsDegrees);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const min = now.getMinutes();
  const hour = now.getHours();
  console.log(hour + ":" + min + ":" + seconds);
}
setInterval(setDate, 1000);
