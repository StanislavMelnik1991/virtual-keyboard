import keyboardStyle from './arrowBlock.css';
import CreateButton from './button';
import { control } from './allButtons';

class CreateArrowBlock {
  constructor(arrowButtons) {
    this.arrowButtons = arrowButtons;
  }

  init() {
    const arrowBlock = document.createElement('div');
    arrowBlock.className = keyboardStyle.arrowBlock;
    this.arrowButtons.forEach((symbol) => {
      const button = new CreateButton(symbol).create();
      button.classList.add(keyboardStyle.button);
      switch (symbol.code) {
        case 'ArrowUp':
          button.style.gridColumn = '2';
          button.style.gridRow = '5';

          break;
        case 'ArrowLeft':
          button.style.gridColumn = '1 / 2';
          button.style.gridRow = '6 / 7';
          break;
        case 'ArrowRight':

          button.style.gridColumn = '3 / 4';
          button.style.gridRow = '6 / 7';
          break;
        case 'ArrowDown':
          button.style.gridRow = '6 / 7';
          break;
        default:
          break;
      }
      arrowBlock.appendChild(button);
    });
    const caps = document.createElement('div');
    caps.className = keyboardStyle.caps;
    const capsIndicator = document.createElement('div');
    capsIndicator.style.backgroundColor = control.caps ? '#08ff00' : 'rgb(60, 60, 60)';
    capsIndicator.className = keyboardStyle.indicator;

    caps.appendChild(capsIndicator);
    const capsDescription = document.createElement('div');
    capsDescription.innerHTML = 'Caps Lock';
    caps.appendChild(capsDescription);

    const num = document.createElement('div');
    num.addEventListener('click', () => {
      control.num = !control.num;
    });
    num.className = keyboardStyle.num;
    const numIndicator = document.createElement('div');
    numIndicator.style.backgroundColor = control.num ? '#08ff00' : 'rgb(60, 60, 60)';
    numIndicator.className = keyboardStyle.indicator;
    num.appendChild(numIndicator);
    const numDescription = document.createElement('div');
    numDescription.innerHTML = 'Num Lock';
    num.appendChild(numDescription);

    const lang = document.createElement('div');
    lang.textContent = control.language;
    lang.className = keyboardStyle.lang;
    lang.onclick = () => {
      control.languageChange();
    };
    if (control.num) {
      caps.style.display = 'none';
      num.style.display = 'none';
      lang.style.display = 'none';
    }
    arrowBlock.appendChild(caps);
    arrowBlock.appendChild(num);
    arrowBlock.appendChild(lang);

    return arrowBlock;
  }
}
export default CreateArrowBlock;
