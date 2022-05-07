import keyboardStyle from './numBlock.css';
import { createButton } from './button'
import { allButtons, control } from './allButtons'
class createNumBlock{
    constructor(){

    }
    init(){
        const numBlock = document.createElement('div')        
        numBlock.className = keyboardStyle.numBlock;

        const caps = document.createElement('div');
        caps.className = keyboardStyle.caps;
        const capsIndicator = document.createElement('div');
        control.caps?capsIndicator.style.backgroundColor = "#08ff00":capsIndicator.style.backgroundColor = "rgb(60, 60, 60)"
        capsIndicator.className = keyboardStyle.indicator;
        
        caps.appendChild(capsIndicator);
        const capsDescription = document.createElement('div');
        capsDescription.innerHTML = "Caps Lock";
        caps.appendChild(capsDescription);

        const num = document.createElement('div');
        num.className = keyboardStyle.num;
        const numIndicator = document.createElement('div');
        control.num?numIndicator.style.backgroundColor = "#08ff00":numIndicator.style.backgroundColor = "rgb(60, 60, 60)"
        numIndicator.className = keyboardStyle.indicator;
        num.appendChild(numIndicator);
        const numDescription = document.createElement('div');
        numDescription.innerHTML = "Num Lock"
        num.appendChild(numDescription);

        const lang = document.createElement('div');
        lang.textContent = control.language
        lang.className = keyboardStyle.lang;
num
        numBlock.appendChild(caps)
        numBlock.appendChild(num)
        numBlock.appendChild(lang)
        for (let symbol of allButtons.numBlock) {
            const button = new createButton(symbol.eng).create();
            button.className = keyboardStyle.buttons
            switch (symbol.eng) {
                case '+':
                    button.classList.add(keyboardStyle.buttonPlus)
                    break
                case 'Enter':
                    button.classList.add(keyboardStyle.buttonEnter)
                    break
                case '0':
                    button.classList.add(keyboardStyle.buttonZero)
                    break
            }
            numBlock.appendChild(button);
            
            
        }
        return numBlock
    }
    
}
export const numBlock = new createNumBlock().init()