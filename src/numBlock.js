/* eslint linebreak-style: ["error", "windows"] */
import keyboardStyle from './numBlock.css';
import CreateButton from './button';
import { control } from './allButtons';

export default class CreateNumBlock {
  constructor(numButtons) {
    this.numButtons = numButtons;
  }

  init() {
    const numBlock = document.createElement('div');
    numBlock.className = keyboardStyle.numBlock;
    if (!control.num) {
      numBlock.style.display = 'none';
    }

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

    numBlock.appendChild(caps);
    numBlock.appendChild(num);
    numBlock.appendChild(lang);

    for (const symbol of this.numButtons) {
      const button = new CreateButton(symbol.eng).create();
      button.className = keyboardStyle.buttons;
      switch (symbol.eng) {
        case 'Num\nLock':
          button.addEventListener('click', () => {
            control.num = !control.num;
          });
          break;
        case '+':
          button.classList.add(keyboardStyle.buttonPlus);
          break;
        case 'Enter':
          button.classList.add(keyboardStyle.buttonEnter);
          break;
        case '0':
          button.classList.add(keyboardStyle.buttonZero);
          break;
      }
      numBlock.appendChild(button);
    }
    return numBlock;
  }
}
