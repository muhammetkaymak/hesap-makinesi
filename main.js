let screen = document.querySelector('.screen');
let btnNum = document.querySelectorAll('.btn-num');
let btnOprnd = document.querySelectorAll('.btn-oprnd');
let optState = false;
let opt = '';
let snc = 0;


btnNum.forEach(n => {
    n.addEventListener('click',showNum);

    function showNum() {
        if (screen.textContent == '0' || optState ) {
            screen.textContent = '';
        }
        screen.textContent += this.textContent;
        optState = false;
    }
});

btnOprnd.forEach(o => {
    o.addEventListener('click',calculate);

    function calculate() {
        optState = true;
        let newOpt = this.textContent;

        switch(opt) {
            case '+':
                screen.textContent = snc + +screen.textContent;
                break;
            case '-':
                screen.textContent = snc - +screen.textContent;
                break;
            case '*':
                screen.textContent = snc * +screen.textContent;
                break;
            case '/':
                screen.textContent = snc / +screen.textContent;
                break;
            case '=':
                snc = +screen.textContent;
                break;
        }

        snc = +screen.textContent;
        opt = newOpt;
    }
});