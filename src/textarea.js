import keyboardStyle from './textarea.css';

export default class CreateTextarea {
  constructor(textContent) {
    this.textContent = textContent;
  }

  init() {
    const textarea = document.createElement('textarea');
    textarea.className = keyboardStyle.textarea;
    textarea.readOnly = 'true';
    textarea.wrap = 'hard';
    textarea.textContent = this.textContent;
    return textarea;
  }
}
