const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');

const changeColor = () => {
  body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

const startChangeColor = () => {
  changeColor();
  intervalId = setInterval(changeColor, 1000);
}

const stopChangeColor = () => {
  clearInterval(intervalId);
}

buttons.forEach(button => {
  button.addEventListener('click', event => {
    if (event.target.dataset.action === 'start') {
      startChangeColor();
    } else {
      stopChangeColor();
    }
  });
});