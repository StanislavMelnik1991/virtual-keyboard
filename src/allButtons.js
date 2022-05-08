/* eslint linebreak-style: ["error", "windows"] */

export const control = {
  text: '',
  caps: false,
  num: true,
  shift: false,
  alt: false,
  ctrl: false,
  insert: false,
  language: 'eng',
  languages: ['eng', 'rus'],

  rows() {
    return 1 + (this.text.match(/\n/g) !== null ? this.text.match(/\n/g).length : 0);
  },
  setLocalStorage() {
    window.localStorage.setItem('text', this.text);
    window.localStorage.setItem('caps', this.caps);
    window.localStorage.setItem('num', this.num);
    window.localStorage.setItem('language', this.language);
  },
  getLocalStorage() {
    this.text = window.localStorage.getItem('text') !== null ? window.localStorage.getItem('text') : '';
    this.caps = window.localStorage.getItem('caps') !== null ? JSON.parse(window.localStorage.getItem('caps')) : false;
    this.num = window.localStorage.getItem('num') !== null ? JSON.parse(window.localStorage.getItem('num')) : true;
    this.language = window.localStorage.getItem('language') !== null ? window.localStorage.getItem('language') : 'eng';
  },
  languageChange() {
    let pos = this.languages.indexOf(this.language);
    pos += 1;
    pos = pos >= this.languages.length ? 0 : pos;
    this.language = this.languages[pos];
  },
};
export const allButtons = {
  mainBlock: [
    {
      code: 'Escape',
      eng: 'Esc',
    },
    {
      code: 'F1',
      eng: 'F1',
    },
    {
      code: 'F2',
      eng: 'F2',
    },
    {
      code: 'F3',
      eng: 'F3',
    },
    {
      code: 'F4',
      eng: 'F4',
    },
    {
      code: 'F5',
      eng: 'F5',
    },
    {
      code: 'F6',
      eng: 'F6',
    },
    {
      code: 'F7',
      eng: 'F7',
    },
    {
      code: 'F8',
      eng: 'F8',
    },
    {
      code: 'F9',
      eng: 'F9',
    },
    {
      code: 'F10',
      eng: 'F10',
    },
    {
      code: 'F11',
      eng: 'F11',
    },
    {
      code: 'F12',
      eng: 'F12',
    },
    {
      code: 'Backquote',
      eng: '`',
    },
    {
      code: 'Digit1',
      eng: '1',
    },
    {
      code: 'Digit2',
      eng: '2',
    },
    {
      code: 'Digit3',
      eng: '3',
    },
    {
      code: 'Digit4',
      eng: '4',
    },
    {
      code: 'Digit5',
      eng: '5',
    },
    {
      code: 'Digit6',
      eng: '6',
    },
    {
      code: 'Digit7',
      eng: '7',
    },
    {
      code: 'Digit8',
      eng: '8',
    },
    {
      code: 'Digit9',
      eng: '9',
    },
    {
      code: 'Digit0',
      eng: '0',
    },
    {
      code: 'Minus',
      eng: '-',
    },
    {
      code: 'Equal',
      eng: '=',
    },
    {
      code: 'Backspace',
      eng: 'Backspace',
    },
    {
      code: 'Tab',
      eng: 'Tab',
    },
    {
      code: 'KeyQ',
      rus: 'й',
      eng: 'q',
    },
    {
      code: 'KeyW',
      rus: 'ц',
      eng: 'w',
    },
    {
      code: 'KeyE',
      rus: 'у',
      eng: 'e',
    },
    {
      code: 'KeyR',
      rus: 'к',
      eng: 'r',
    },
    {
      code: 'KeyT',
      rus: 'е',
      eng: 't',
    },
    {
      code: 'KeyY',
      rus: 'н',
      eng: 'y',
    },
    {
      code: 'KeyU',
      rus: 'г',
      eng: 'u',
    },
    {
      code: 'KeyI',
      rus: 'ш',
      eng: 'i',
    },
    {
      code: 'KeyO',
      rus: 'щ',
      eng: 'o',
    },
    {
      code: 'KeyP',
      rus: 'з',
      eng: 'p',
    },
    {
      code: 'BracketLeft',
      rus: 'х',
      eng: '[',
    },
    {
      code: 'BracketRight',
      rus: 'ъ',
      eng: ']',
    },
    {
      code: 'Enter',
      eng: 'Enter',
    },
    {
      code: 'CapsLock',
      eng: 'Caps\nLock',
    },
    {
      code: 'KeyA',
      rus: 'ф',
      eng: 'a',
    },
    {
      code: 'KeyS',
      rus: 'ы',
      eng: 's',
    },
    {
      code: 'KeyD',
      rus: 'в',
      eng: 'd',
    },
    {
      code: 'KeyF',
      rus: 'а',
      eng: 'f',
    },
    {
      code: 'KeyG',
      rus: 'п',
      eng: 'g',
    },
    {
      code: 'KeyH',
      rus: 'р',
      eng: 'h',
    },
    {
      code: 'KeyJ',
      rus: 'о',
      eng: 'j',
    },
    {
      code: 'KeyK',
      rus: 'л',
      eng: 'k',
    },
    {
      code: 'KeyL',
      rus: 'д',
      eng: 'l',
    },
    {
      code: 'Semicolon',
      rus: 'ж',
      eng: ';',
    },
    {
      code: 'Quote',
      rus: 'э',
      eng: "'",
    },
    {
      code: 'Backslash',
      rus: '\\',
      rusShift: '/',
      eng: '\\',
      engShift: '|',
    },
    {
      code: 'ShiftLeft',
      eng: 'Shift',
    },
    {
      code: 'IntlBackslash',
      rus: '\\',
      rusShift: '/',
      eng: '\\',
      engShift: '|',
    },
    {
      code: 'KeyZ',
      rus: 'я',
      eng: 'z',
    },
    {
      code: 'KeyX',
      rus: 'ч',
      eng: 'x',
    },
    {
      code: 'KeyC',
      rus: 'с',
      eng: 'c',
    },
    {
      code: 'KeyV',
      rus: 'м',
      eng: 'v',
    },
    {
      code: 'KeyB',
      rus: 'и',
      eng: 'b',
    },
    {
      code: 'KeyN',
      rus: 'т',
      eng: 'n',
    },
    {
      code: 'KeyM',
      rus: 'ь',
      eng: 'm',
    },
    {
      code: 'Comma',
      rus: 'б',
      eng: ',',
    },
    {
      code: 'Period',
      rus: 'ю',
      eng: '.',
    },
    {
      code: 'Slash',
      rus: '.',
      eng: '/',
    },
    {
      code: 'ShiftRight',
      eng: 'Shift',
    },
    {
      code: 'ControlLeft',
      eng: 'Ctrl',
    },
    {
      code: 'MetaLeft',
      eng: 'Win',
    },
    {
      code: 'AltLeft',
      eng: 'Alt',
    },
    {
      code: 'Space',
      eng: 'Space',
    },
    {
      code: 'AltRight',
      eng: 'Alt Gr',
    },
    {
      code: 'MetaRight',
      eng: 'Win',
    },
    {
      code: 'ControlRight',
      eng: 'Ctrl',
    },
  ],
  arrowBlock: [
    {
      code: 'PrtSc',
      eng: 'Print\nScreen',
    },
    {
      code: 'ScrollLock',
      eng: 'Scroll\nLock',
    },
    {
      code: 'Pause',
      eng: 'Pause\nBreak',
    },
    {
      code: 'Insert',
      eng: 'Insert',
    },
    {
      code: 'Home',
      eng: 'Home',
    },
    {
      code: 'PageUp',
      eng: 'Page\nUp',
    },
    {
      code: 'Delete',
      eng: 'Delete',
    },
    {
      code: 'End',
      eng: 'End',
    },
    {
      code: 'PageDown',
      eng: 'Page\nDown',
    },
    {
      code: 'ArrowUp',
      eng: 'arrowUp',
    },
    {
      code: 'ArrowLeft',
      eng: 'arrowLeft',
    },
    {
      code: 'ArrowDown',
      eng: 'arrowBottom',
    },
    {
      code: 'ArrowRight',
      eng: 'arrowRight',
    },
  ],
  numBlock: [
    {
      code: 'NumLock',
      eng: 'Num\nLock',
    },
    {
      code: 'NumpadDivide',
      eng: '/',
    },
    {
      code: 'NumpadMultiply',
      eng: '*',
    },
    {
      code: 'NumpadSubtract',
      eng: '-',
    },
    {
      code: 'Numpad7',
      eng: '7',
    },
    {
      code: 'Numpad8',
      eng: '8',
    },
    {
      code: 'Numpad9',
      eng: '9',
    },
    {
      code: 'NumpadAdd',
      eng: '+',
    },
    {
      code: 'Numpad4',
      eng: '4',
    },
    {
      code: 'Numpad5',
      eng: '5',
    },
    {
      code: 'Numpad6',
      eng: '6',
    },
    {
      code: 'Numpad1',
      eng: '1',
    },
    {
      code: 'Numpad2',
      eng: '2',
    },
    {
      code: 'Numpad3',
      eng: '3',
    },
    {
      code: 'NumpadEnter',
      eng: 'Enter',
    },
    {
      code: 'Numpad0',
      eng: '0',
    },
    {
      code: 'NumpadDecimal',
      eng: '.',
    },
  ],
};
