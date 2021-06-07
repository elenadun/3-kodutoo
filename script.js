
//show
let input = document.querySelector('.input');

let power = "";
//input
function insert(num) {
    if (input.textContent == 0) {
        input.textContent = "";
        input.textContent += num;
    } else
        input.textContent += num;
}
//clear
function clean() {
    input.textContent = "0";
    power = "";
}
//delete
function back() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);
    if (input.textContent == 0) {
        input.textContent = "0";
    }
}
//equal
function equal() {
    let exp = input.textContent;
    if (input.textContent.includes('^')) {
        let tmp = input.textContent.split('^')
        let num = eval(power);
        let pow = +tmp[1]
        input.textContent = Math.pow(num, pow);
        power = "";
        return;
    }
    if (exp) {
        input.textContent = eval(exp);
    }
}
//protsendid
function percent() {
    input.textContent = eval(input.textContent) / 100;
}

function constant(name) {
    if (input.textContent == 0) {
        input.textContent = "";
    }
    if (name == "pi")
        input.textContent += Math.PI.toFixed(8);
    if (name == "e")
        input.textContent += Math.E.toFixed(8);
}






//Синусы и косинусы
function f(name) {
    if (name == 'sin') {
        if(document.querySelector('.type').textContent == "deg") {
            
            input.textContent = parseFloat(Math.sin(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());    
    }
}
    if (name == 'cos') {
        if(document.querySelector('.type').textContent == "deg") {
    
            input.textContent = parseFloat(Math.cos(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
    }
}
    if (name == 'tan') {
        if(document.querySelector('.type').textContent == "deg") {
       
            input.textContent = parseFloat(Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString()); 
    
    }
}
    
//päev/öö reziim
let buttonBlue = document.querySelector('#btn-blue');
let buttonWhite = document.querySelector('#btn-white');

buttonBlue.addEventListener('click', () => {
    document.body.style.background = 'blue';
})

buttonWhite.addEventListener('click', () => {
    document.body.style.background = 'white';
}) }
