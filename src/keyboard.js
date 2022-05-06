import keyboardStyle from './keyboard.css';
import { textarea } from './textarea';
import { mainBlock } from './mainBlock'
import { arrowBlock } from './arrowBlock'
import { numBlock } from './numBlock'
class createKeyboard {
    constructor(textarea, mainBlock, arrowBlock, numBlock){
        this.textarea = textarea;
        this.mainBlock = mainBlock;
        this.arrowBlock = arrowBlock;
        this.numBlock = numBlock
    }
    init(){
        const keyboard = document.createElement('div')
        keyboard.className = keyboardStyle.keyboard;
        keyboard.appendChild(this.textarea)
        const tmp = document.createElement('div')
        tmp.className = keyboardStyle.keys;
        tmp.appendChild(this.mainBlock)
        tmp.appendChild(this.arrowBlock)
        tmp.appendChild(this.numBlock)
        keyboard.appendChild(tmp)
        
        return keyboard
    }
}

export const keyboard = new createKeyboard(textarea ,mainBlock, arrowBlock, numBlock)