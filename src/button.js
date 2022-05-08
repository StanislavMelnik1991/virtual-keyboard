/* eslint linebreak-style: ["error", "windows"] */
import keyboardStyle from './button.css';
import { control } from './allButtons';

class CreateButton {
  constructor(symbol) {
    this.symbol = `${symbol}`;
  }

  create() {
    const button = document.createElement('button');
    if (this.symbol.length > 1) {
      button.textContent = this.symbol;
    } else {
      button.textContent = control.caps
        ? this.symbol.toUpperCase()
        : this.symbol.toLowerCase();
    }

    switch (this.symbol) {
      case 'Esc':
        button.onclick = () => {
          control.text = '';
        };
        break;

      case 'F1':
        button.onclick = () => {
          // alert('Help');
        };
        break;

      case 'Backspace':
        button.classList.add(keyboardStyle.bigButton);
        button.onclick = () => {
          control.text = control.text.substring(0, control.text.length - 1);
        };
        break;

      case 'Enter':
        button.classList.add(keyboardStyle.bigButton);
        button.onclick = () => {
          control.text += '\n';
        };
        break;

      case 'Space':
        button.classList.add(keyboardStyle.biggestButton);
        button.textContent = '';
        button.onclick = () => {
          control.text += ' ';
        };
        break;

      case 'Caps\nLock':
        button.classList.add(keyboardStyle.bigButton);
        button.onclick = () => {
          control.caps = !control.caps;
        };
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
        };
        button.onmouseup = () => {
          control.shift = !control.shift;
        };
        break;

      default:
        if (this.symbol.length === 1) {
          button.onclick = () => {
            control.text += control.caps
              ? this.symbol.toUpperCase()
              : this.symbol.toLowerCase();
          };
        }
        break;
    }

    return button;
  }
}
export default CreateButton;
