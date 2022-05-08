/* eslint linebreak-style: ["error", "windows"] */
import keyboardStyle from './textarea.css';

export default class CreateTextarea {
  constructor(textContent) {
    this.textContent = textContent;
  }

  init() {
    const textarea = document.createElement('textarea');
    textarea.className = keyboardStyle.textarea;
    textarea.textContent = this.textContent;
    return textarea;
  }
}

// export const textarea = new createTextarea().init()
