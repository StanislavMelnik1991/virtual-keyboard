import keyboardStyle from './arrowBlock.css';
import { createButton } from './button'
import { allButtons } from './allButtons'
import { control } from './allButtons'
class createArrowBlock{
    constructor(){

    }
    init(){
        
        const arrowBlock = document.createElement('div')
        arrowBlock.className = keyboardStyle.arrowBlock;
            for (let str of allButtons.arrowBlock) {
                const rows = document.createElement('div')
                rows.className = keyboardStyle.row
                for (let symbol of str) {
                    const button = new createButton(symbol.eng)
                    rows.appendChild(button.create())
                }
                arrowBlock.appendChild(rows)
            }
        
        
        
        //console.log(mainBlock)
        return arrowBlock
    }
    
}
export const arrowBlock = new createArrowBlock().init()