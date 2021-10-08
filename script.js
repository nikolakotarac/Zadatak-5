const container = document.querySelector('.container');
const toggleBtn = document.querySelector('.toggle-btn');
const circle = document.querySelector('.circle');
let display = document.querySelector('.display');

let buttons = Array.from(document.getElementsByClassName('button','x'));
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'RESET':
                display.innerText = '';
                break;  
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case 'DEL':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
let activeTheme = 0;
toggleBtn.addEventListener('click' , function(e) {
    e.preventDefault();

    activeTheme += 1;
    if (activeTheme > 2) {
        activeTheme = 0;
    }
    if (activeTheme === 1) {
    container.classList.add('white');
    document.body.style.backgroundColor = "#F2F2F2";
    }
    if (activeTheme === 2) {
        container.classList.add('dark');
        document.body.style.backgroundColor = "#17062A";

    }
    if (activeTheme === 0) {
       container.classList.remove('dark');
       container.classList.remove('white');
       document.body.style.backgroundColor = "#3A4663";
    }
  
})