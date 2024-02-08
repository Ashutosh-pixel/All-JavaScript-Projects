const Hex = '0123456789ABCDEF';
let colorcode = '#'
let index = null;
let clear;


const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const body = document.querySelector('body')


function colorGenerator(){
    colorcode = '#';
    for (let i = 0; i < 6; i++) {
        index = parseInt(Math.random()*16);
        colorcode += Hex[index];
    }
    body.style.backgroundColor = colorcode;
    console.log(colorcode);
}


start.addEventListener('click', (e) => {
    clear = setInterval(() => {
        colorGenerator();
    }, 1000);
})

stop.addEventListener('click', (e) => {
    clearInterval(clear);
})