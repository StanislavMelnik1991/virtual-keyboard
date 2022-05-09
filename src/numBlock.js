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
    capsIndicator.className = keyboardStyle.indicator;
    if (control.caps) {
      if (control.illumination) {
        capsIndicator.classList.add(keyboardStyle.illuminationOn);
      }
    }

    caps.appendChild(capsIndicator);
    const capsDescription = document.createElement('div');
    capsDescription.innerHTML = 'Caps Lock';
    caps.appendChild(capsDescription);

    const num = document.createElement('div');
    num.className = keyboardStyle.num;
    const numIndicator = document.createElement('div');
    /* numIndicator.style.backgroundColor = control.num ? '#08ff00' : 'rgb(60, 60, 60)'; */
    numIndicator.className = keyboardStyle.indicator;
    if (control.num) {
      if (control.illumination) {
        numIndicator.classList.add(keyboardStyle.illuminationOn);
      }
    }
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

    const illumination = document.createElement('div');
    illumination.textContent = 'illum.';
    illumination.className = keyboardStyle.illumination;
    illumination.onclick = () => {
      control.illumination = !control.illumination;
    };

    numBlock.appendChild(caps);
    numBlock.appendChild(num);
    numBlock.appendChild(lang);
    numBlock.appendChild(illumination);
    this.numButtons.forEach((symbol) => {
      const button = new CreateButton(symbol).create();
      button.classList.add(keyboardStyle.button);
      switch (symbol.code) {
        case 'NumLock':
          button.addEventListener('click', () => {
            control.num = !control.num;
          });
          break;
        case 'NumpadAdd':
          button.classList.add(keyboardStyle.buttonPlus);
          break;
        case 'NumpadEnter':
          button.classList.add(keyboardStyle.buttonEnter);
          break;
        case 'Numpad0':
          button.classList.add(keyboardStyle.buttonZero);
          break;
        default:
          break;
      }
      numBlock.appendChild(button);
    });
    return numBlock;
  }
}
