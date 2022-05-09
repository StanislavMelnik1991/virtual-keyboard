import keyboardStyle from './mainBlock.css';
import CreateButton from './button';

class CreateMainBlock {
  constructor(mainButtons) {
    this.mainButtons = mainButtons;
  }

  init() {
    const mainBlock = document.createElement('div');
    mainBlock.className = keyboardStyle.mainBlock;
    this.mainButtons.forEach((symbol) => {
      const button = new CreateButton(symbol).create();
      button.classList.add(keyboardStyle.buttonMain);
      mainBlock.appendChild(button);
    });

    return mainBlock;
  }
}
export default CreateMainBlock;
