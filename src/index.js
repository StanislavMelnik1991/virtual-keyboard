import { createKeyboard} from './keyboard';
import { createTextarea } from './textarea';
import { createMainBlock } from './mainBlock'
import { createArrowBlock } from './arrowBlock'
import { createNumBlock } from './numBlock'
import { control } from './allButtons'

export const textarea = new createTextarea().init()

function keyboardInit(){
    // для проверки изменений параметров кнопок
    const checkControl = {
            caps: control.caps,
            num: control.num,
            shift: control.shift,
            alt: control.alt,
            ctrl: control.ctrl,
            insert: control.insert,
            language: control.language, 
    }
    document.body.innerHTML = ''
    const mainBlock = new createMainBlock().init()
    const arrowBlock = new createArrowBlock().init()
    const numBlock = new createNumBlock().init()
    const keyboard = new createKeyboard(textarea ,mainBlock, arrowBlock, numBlock).init()

    keyboard.addEventListener('click', ()=>{
        if (checkControl.caps!==control.caps||checkControl.num!==control.num||checkControl.shift!==control.shift||checkControl.language!==control.language||checkControl.alt!==control.alt){
            keyboardInit()            
        } 
    })

    document.body.appendChild(keyboard)
}

keyboardInit()

