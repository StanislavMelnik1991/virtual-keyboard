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
    button.className = (keyboardStyle.buttonMain);
    if (control.illumination) {
      button.classList.add(keyboardStyle.illuminationOn);
    } else {
      button.classList.remove(keyboardStyle.illuminationOn);
    }
    document.body.addEventListener('keydown', (ev) => {
      ev.preventDefault();
      if (this.key.code === ev.code) {
        const fakeClick = new Event('click', { bubbles: true, cancelable: true });
        const fakeKeyDown = new Event('mousedown', { bubbles: true, cancelable: true });
        button.dispatchEvent(fakeClick);
        button.dispatchEvent(fakeKeyDown);
        button.classList.add(keyboardStyle.active);
      }
    });
    document.body.addEventListener('keyup', (ev) => {
      ev.preventDefault();
      if (this.key.code === ev.code) {
        const fakeKeyUp = new Event('mouseup', { bubbles: true, cancelable: true });
        button.dispatchEvent(fakeKeyUp);
        button.classList.remove(keyboardStyle.active);
      }
    });
    if (symbol.length > 1) {
      button.textContent = symbol;
    } else {
      button.textContent = control.caps
        ? symbol.toUpperCase()
        : symbol.toLowerCase();
    }

    button.onclick = () => {
      switch (symbol) {
        case 'Esc':
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
        case '':
          button.classList.add(keyboardStyle.biggestButton);
          control.text += ' ';
          break;
        case 'Caps Lock':
          button.classList.add(keyboardStyle.bigButton);
          control.caps = !control.caps;
          break;
        case 'Tab ↹':
          button.classList.add(keyboardStyle.bigButton);
          control.text += '    ';
          break;
        default:
          if (symbol.length === 1) {
            if (control.shift) {
              control.text += !control.caps
                ? symbol.toUpperCase()
                : symbol.toLowerCase();
            } else {
              control.text += control.caps
                ? symbol.toUpperCase()
                : symbol.toLowerCase();
            }
          }
      }
    };
    button.onmousedown = () => {
      switch (symbol) {
        case 'Alt' || 'Alt Gr':
          control.alt = true;
          break;
        case 'Ctrl':
          control.ctrl = true;
          break;
        case 'Shift':
          control.shift = true;
          break;
        default:
          break;
      }
    };
    button.onmouseup = () => {
      switch (symbol) {
        case 'Alt' || 'Alt Gr':
          if (control.shift) {
            control.languageChange();
          }
          control.alt = false;
          break;
        case 'Ctrl':
          if (control.shift) {
            control.languageChange();
          }
          control.ctrl = false;
          break;
        case 'Shift':
          if (control.alt || control.ctrl) {
            control.languageChange();
          }
          control.shift = false;
          break;
        default:
          break;
      }
    };
    return button;
  }
}
export default CreateButton;
