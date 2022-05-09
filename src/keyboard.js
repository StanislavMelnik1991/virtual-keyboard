import keyboardStyle from './keyboard.css';
import { control } from './allButtons';

class CreateKeyboard {
  constructor(textarea, mainBlock, arrowBlock, numBlock) {
    this.textarea = textarea;
    this.mainBlock = mainBlock;
    this.arrowBlock = arrowBlock;
    this.numBlock = numBlock;
  }

  init() {
    const keyboard = document.createElement('div');
    keyboard.className = keyboardStyle.keyboard;
    keyboard.appendChild(this.textarea);
    const block = document.createElement('div');
    block.className = keyboardStyle.keys;
    if (!control.num) {
      block.style.gridTemplateColumns = '15fr 3fr';
    }
    block.appendChild(this.mainBlock);
    block.appendChild(this.arrowBlock);
    block.appendChild(this.numBlock);
    keyboard.appendChild(block);

    return keyboard;
  }
}
export default CreateKeyboard;
