/* eslint linebreak-style: ["error", "windows"] */
import keyboardStyle from './mainBlock.css';
import CreateButton from './button';

class CreateMainBlock {
  constructor(mainButtons) {
    this.mainButtons = mainButtons;
  }

  init() {
    const mainBlock = document.createElement('div');
    mainBlock.className = keyboardStyle.mainBlock;

    for (const symbol of this.mainButtons) {
      const button = new CreateButton(symbol).create();
      button.classList.add(keyboardStyle.buttonMain);
      mainBlock.appendChild(button);
    }

    // console.log(mainBlock)
    return mainBlock;
  }
}
export default CreateMainBlock;
