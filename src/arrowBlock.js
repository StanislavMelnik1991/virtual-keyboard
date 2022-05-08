/* eslint linebreak-style: ["error", "windows"] */
import keyboardStyle from './arrowBlock.css';
import CreateButton from './button';
import { control } from './allButtons';
import arrow from './assets/arrow.svg';

class CreateArrowBlock {
  constructor(arrowButtons) {
    this.arrowButtons = arrowButtons;
  }

  init() {
    const arrowBlock = document.createElement('div');
    arrowBlock.className = keyboardStyle.arrowBlock;
    for (const symbol of this.arrowButtons) {
      const button = new CreateButton(symbol.eng).create();
      switch (symbol.eng) {
        case 'arrowUp':
          button.innerHTML = arrow;
          button.children[0].style.transform = 'rotate(90deg)';
          button.style.gridColumn = '2 / 3';
          button.style.gridRow = '5 / 6';

          break;
        case 'arrowLeft':
          button.innerHTML = arrow;
          button.style.gridColumn = '1 / 2';
          button.style.gridRow = '6 / 7';
          break;
        case 'arrowRight':
          button.innerHTML = arrow;
          button.children[0].style.transform = 'rotate(180deg)';
          button.style.gridColumn = '3 / 4';
          button.style.gridRow = '6 / 7';
          break;
        case 'arrowBottom':
          button.innerHTML = arrow;
          button.children[0].style.transform = 'rotate(-90deg)';
          button.style.gridRow = '6 / 7';
          break;
      }

      button.className = keyboardStyle.buttons;
      arrowBlock.appendChild(button);
    }

    // для отображения индикации  при выключенном Num lock
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

    // console.log(mainBlock)
    return arrowBlock;
  }
}
export default CreateArrowBlock;
