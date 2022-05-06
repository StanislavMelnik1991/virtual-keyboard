import keyboardStyle from './numBlock.css';
import styles from './numBlock.css';
import { createButton } from './button'
import { allButtons } from './allButtons'
class createNumBlock{
    constructor(){

    }
    init(){
        const numBlock = document.createElement('div')
        numBlock.className = keyboardStyle.numBlock;
        for (let symbol of allButtons.numBlock) {
            const button = new createButton(symbol.eng).create();
            button.className = keyboardStyle.buttons
            
            numBlock.appendChild(button);
            
            
        }
        return numBlock
    }
    
}
export const numBlock = new createNumBlock().init()