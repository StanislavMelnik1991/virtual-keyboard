import keyboardStyle from './numBlock.css';
import { createButton } from './button'
import { allButtons } from './allButtons'
class createNumBlock{
    constructor(){

    }
    init(){
        const numBlock = document.createElement('div')        
        numBlock.className = keyboardStyle.numBlock;

        const indicatorCaps = document.createElement('div');
        indicatorCaps.className = keyboardStyle.caps;

        const indicatorNum = document.createElement('div');
        indicatorNum.className = keyboardStyle.num;

        numBlock.appendChild(indicatorCaps)
        numBlock.appendChild(indicatorNum)
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