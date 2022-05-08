/* eslint linebreak-style: ["error", "windows"] */
import keyboardStyle from './mainBlock.css';
import CreateButton from './button';
import { control } from './allButtons';

class CreateMainBlock {
  constructor(mainButtons) {
    this.mainButtons = mainButtons;
  }

  init() {
    const mainBlock = document.createElement('div');
    mainBlock.className = keyboardStyle.mainBlock;
    for (const str of this.mainButtons) {
      const rows = document.createElement('div');
      rows.classList = keyboardStyle.row;
      for (const symbol of str) {
        let leng = symbol.eng;
        if (control.language !== 'eng') {
          leng = symbol.rus ? symbol.rus : symbol.eng;
        }
        const button = new CreateButton(leng).create();
        button.classList.add(keyboardStyle.buttonMain);

        rows.appendChild(button);
      }
      mainBlock.appendChild(rows);
    }

    // console.log(mainBlock)
    return mainBlock;
  }
}
export default CreateMainBlock;
