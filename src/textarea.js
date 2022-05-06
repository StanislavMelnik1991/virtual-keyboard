import keyboardStyle from './textarea.css';
class createTextarea{
    constructor(){

    }
    init(){
        const textarea = document.createElement('div')
        textarea.className = keyboardStyle.textarea;
        return textarea
    }
    
}
export const textarea = new createTextarea().init()