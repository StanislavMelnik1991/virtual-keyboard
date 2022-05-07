import keyboardStyle from './mainBlock.css';
import { createButton } from './button'
import { allButtons } from './allButtons'
import { control } from './allButtons'

export class createMainBlock{
    constructor(){

    }
    init(){
        
        const mainBlock = document.createElement('div')
        mainBlock.className = keyboardStyle.mainBlock;
            for (let str of allButtons.mainBlock) {
                const rows = document.createElement('div')
                rows.classList = keyboardStyle.row
                for (let symbol of str) {

                    let leng = symbol.eng
                    if (control.language !== 'eng'){
                        leng = symbol.rus?symbol.rus:symbol.eng;
                    }
                    const button = new createButton(leng).create()
                    button.classList.add(keyboardStyle.buttonMain)
                    
                    rows.appendChild(button)
                }
                mainBlock.appendChild(rows)
            }
        
        
        
        //console.log(mainBlock)
        return mainBlock
    }
    
}
export let mainBlock = new createMainBlock().init()


    
