
let screen=document.querySelector('.screen');
let buttons=document.querySelectorAll('button');

let calcuation=[]
let accCalucatios;

function calculate(button){
    // console.log(button)
    let value=button.textContent

    if (value === "C"){
        calcuation=[]
        screen.textContent='0'
    }else if (value === "=") {
        console.log(accCalucatios)
        screen.textContent = eval(accCalucatios)
    }else {
        calcuation.push(value)

        accCalucatios=calcuation.join('')

        screen.textContent=accCalucatios

        /*console.log(calcuation)*/
    }

}

buttons.forEach(button => button.addEventListener('click',() => calculate(button)))
