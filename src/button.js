import keyboardStyle from './button.css';
import { textarea } from './textarea';
import { control } from './allButtons';
import { mainBlock } from './mainBlock';

export class createButton{
    constructor(symbol){
        this.symbol = symbol+''
    }
    create(){
        const button = document.createElement('button')
        if (this.symbol.length>1){
            button.textContent = this.symbol  
        }else{
            button.textContent = control.caps?
            this.symbol.toUpperCase():
            this.symbol.toLowerCase()
        }
        

        switch (this.symbol) {
            case 'Esc':
                button.onclick=()=>{
                    textarea.textContent=""
                }
                break;

            case 'F1':
                button.onclick=()=>{
                    alert("Help")
                }
                break;

            case 'F2':
            case 'F3':
            case 'F4':
            case 'F5':
            case 'F6':
            case 'F7':
            case 'F8':
            case 'F9':
            case 'F10':
            case 'F11':
            case 'F12': 
                break;

            case 'Backspace':
                button.classList.add(keyboardStyle.bigButton)
                button.onclick=()=>{
                    textarea.innerHTML=textarea.innerHTML.slice(0, textarea.innerHTML.length-1);
                }
                break;

            case 'Enter':
                button.classList.add(keyboardStyle.bigButton)
                button.onclick=()=>{
                    textarea.appendChild(document.createElement('br'))    
                }
                break;

            case 'Space':
                button.classList.add(keyboardStyle.biggestButton)
                button.textContent = ''
                button.onclick=()=>{
                        textarea.innerHTML+="&nbsp"                            
                }
                break;

            case 'Caps\nLock':
                button.classList.add(keyboardStyle.bigButton)
                button.onclick=()=>{
                    control.caps = !control.caps                                     
                    for (let i = 0;i<mainBlock.children.length;i++){ 
                        for (let a = 0;a<mainBlock.children[i].children.length;a++){            
                            if (mainBlock.children[i].children[a].textContent.length===1){                            
                                mainBlock.children[i].children[a].textContent = control.caps?
                                mainBlock.children[i].children[a].textContent.toUpperCase():
                                mainBlock.children[i].children[a].textContent.toLowerCase()
                            }
                        } 
                    }        
                }
                break;
            case 'Tab':
                button.classList.add(keyboardStyle.bigButton)
                break;
            case 'Alt':
            case 'Alt Gr':
                //button.classList.add(keyboardStyle.bigButton)
                button.onmousedown=()=> {                    
                    control.alt = !control.alt                    
                }
                button.onmouseup=()=> {                    
                    control.alt = !control.alt                    
                }
                break;
            case 'Ctrl':
                button.classList.add(keyboardStyle.bigButton)
                button.onmousedown=()=> {                                      
                    control.ctrl = !control.ctrl                   
                }
                button.onmouseup=()=> {                    
                    control.ctrl = !control.ctrl                    
                }
                break;
            case 'Shift':
            button.classList.add(keyboardStyle.bigButton)
            button.onmousedown=()=> {                                      
                control.shift = !control.shift                  
            }
            button.onmouseup=()=> {                    
                control.shift = !control.shift                       
            }
                break;
                
                
            default:
                if (this.symbol.length === 1) {
                    button.onclick=()=>{
                        textarea.innerHTML+= control.caps?
                            this.symbol.toUpperCase():
                            this.symbol.toLowerCase();                       
                    }
                }
                break;    
        }
        
        return button
    }
    
}
const button = new createButton()