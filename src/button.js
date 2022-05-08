/* eslint linebreak-style: ["error", "windows"] */
import keyboardStyle from './button.css';
import { control } from './allButtons';

class CreateButton {
  constructor(key) {
    this.key = key;
  }

  create() {
    const symbol = this.key[control.language] !== undefined
      ? this.key[control.language]
      : this.key.eng;
    const button = document.createElement('button');
    button.classList.add(keyboardStyle.buttonMain);
    document.body.addEventListener('keydown', (ev) => {
      ev.preventDefault();
      if (this.key.code === ev.code) {
        const fakeClick = new Event('click', { bubbles: true, cancelable: true });
        button.dispatchEvent(fakeClick);
      }
    });
    if (symbol.length > 1) {
      button.textContent = symbol;
    } else {
      button.textContent = control.caps
        ? symbol.toUpperCase()
        : symbol.toLowerCase();
    }

    button.onclick = function click() {
      switch (symbol) {
        case 'Esc':
          // button.classList.add(keyboardStyle.bigButton);
          control.text = '';
          break;
        case 'F1':
          break;
        case 'Backspace':
          button.classList.add(keyboardStyle.bigButton);
          control.text = control.text.substring(0, control.text.length - 1);
          break;
        case 'Enter':
          button.classList.add(keyboardStyle.bigButton);
          control.text += '\n';
          break;
        case 'Space':
          button.classList.add(keyboardStyle.biggestButton);
          button.textContent = '';
          control.text += ' ';
          break;
        case 'Caps\nLock':
          button.classList.add(keyboardStyle.bigButton);
          control.caps = !control.caps;
          break;
        case 'Tab':
          button.classList.add(keyboardStyle.bigButton);
          break;
        case 'Alt':
        case 'Alt Gr':
          button.onmousedown = () => {
            control.alt = !control.alt;
          };
          button.onmouseup = () => {
            control.alt = !control.alt;
          };
          break;
        case 'Ctrl':
          button.classList.add(keyboardStyle.bigButton);
          button.onmousedown = () => {
            control.ctrl = !control.ctrl;
          };
          button.onmouseup = () => {
            control.ctrl = !control.ctrl;
          };
          break;
        case 'Shift':
          button.classList.add(keyboardStyle.bigButton);
          button.onmousedown = () => {
            control.shift = !control.shift;
            control.caps = !control.caps;
          };
          button.onmouseup = () => {
            control.shift = !control.shift;
            control.caps = !control.caps;
          };
          break;

        default:
          if (symbol.length === 1) {
            control.text += control.caps
              ? symbol.toUpperCase()
              : symbol.toLowerCase();
          }
          break;
      }
    };

    return button;
  }
}
export default CreateButton;
