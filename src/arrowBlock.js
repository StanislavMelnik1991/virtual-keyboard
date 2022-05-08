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
    for (const str of this.arrowButtons) {
      const rows = document.createElement('div');
      rows.className = keyboardStyle.row;
      for (const symbol of str) {
        const button = new CreateButton(symbol.eng).create();
        switch (symbol.eng) {
          case 'arrowUp':
            button.innerHTML = arrow;
            button.children[0].style.transform = 'rotate(90deg)';
            button.style.gridColumn = '2 / 4';

            break;
          case 'arrowLeft':
            button.innerHTML = arrow;
            break;
          case 'arrowRight':
            button.innerHTML = arrow;
            button.children[0].style.transform = 'rotate(180deg)';
            break;
          case 'arrowBottom':
            button.innerHTML = arrow;
            button.children[0].style.transform = 'rotate(-90deg)';
            break;
        }

        if (symbol.eng === 'arrowBottom') {
          button.innerHTML = arrow;
          button.children[0].style.transform = 'rotate(-90deg)';
        }

        button.className = keyboardStyle.buttons;
        rows.appendChild(button);
      }
      arrowBlock.appendChild(rows);
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
    if (control.num) {
      caps.style.display = 'none';
      num.style.display = 'none';
      lang.style.display = 'none';
    }
    arrowBlock.firstChild.appendChild(caps);
    arrowBlock.firstChild.appendChild(num);
    arrowBlock.firstChild.appendChild(lang);

    // console.log(mainBlock)
    return arrowBlock;
  }
}
export default CreateArrowBlock;
