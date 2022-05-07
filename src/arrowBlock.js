import keyboardStyle from './arrowBlock.css';
import { createButton } from './button'
import { allButtons } from './allButtons'
import arrow from './assets/arrow.svg';
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
                    const button = new createButton(symbol.eng).create()
                    switch (symbol.eng) {
                        case 'arrowUp':
                            button.innerHTML = arrow
                            button.children[0].style.transform = 'rotate(90deg)';
                            button.style.gridColumn = '2 / 4';
                            
                            break
                        case 'arrowLeft':
                            button.innerHTML = arrow 
                            break
                        case 'arrowRight':
                            button.innerHTML = arrow
                            button.children[0].style.transform = 'rotate(180deg)';
                            break
                        case 'arrowBottom':
                            button.innerHTML = arrow
                            button.children[0].style.transform = 'rotate(-90deg)';
                            break
                    }
                   
                        
                    
                    
                    if (symbol.eng === 'arrowBottom'){
                        button.innerHTML = arrow
                        button.children[0].style.transform = 'rotate(-90deg)';
                        
                    }
                    button.className = keyboardStyle.buttons
                    rows.appendChild(button)
                }
                arrowBlock.appendChild(rows)
            }
        
        
        
        //console.log(mainBlock)
        return arrowBlock
    }
    
}
export const arrowBlock = new createArrowBlock().init()