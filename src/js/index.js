const { func } = require("assert-plus");
const { classBody } = require("babel-types");

const refs = {
    startBtn: document.querySelector('[data-action=start]'),
    stopBtn: document.querySelector('[data-action=stop]'),
 
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const DELAY_TIME = 1000;
let isActiveBackColor = false;
let timerId = null;

refs.startBtn.addEventListener('click', onStartBtnClick)
refs.stopBtn.addEventListener('click', onStopBtnClick)


function onStartBtnClick() {

    if (isActiveBackColor===true) {
        return
    }
    const body = document.querySelector('body')
    timerId = setInterval(() => {
    const lengthArray = colors.length -1
    const randomIndexColor = randomIntegerFromInterval(0, lengthArray)
        const randomColor = colors[randomIndexColor]
        console.log(randomColor)
    body.style.backgroundColor = randomColor;
    isActiveBackColor = true
       
   }, DELAY_TIME);
    return timerId
    
}

function onStopBtnClick() {
    clearInterval(timerId)
    isActiveBackColor = false
}
