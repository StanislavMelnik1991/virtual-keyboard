/* eslint linebreak-style: ["error", "windows"] */
import CreateKeyboard from './keyboard';
import CreateTextarea from './textarea';
import CreateMainBlock from './mainBlock';
import CreateArrowBlock from './arrowBlock';
import CreateNumBlock from './numBlock';
import { allButtons, control } from './allButtons';

control.getLocalStorage();
const textarea = new CreateTextarea(control.text).init();
export default { textarea };
textarea.rows = control.rows();
textarea.style.display = control.text === '' ? 'none' : 'flex';

function keyboardInit() {
  // для проверки изменений параметров кнопок
  const checkControl = {
    text: control.text,
    caps: control.caps,
    num: control.num,
    shift: control.shift,
    alt: control.alt,
    ctrl: control.ctrl,
    insert: control.insert,
    language: control.language,
  };
  document.body.innerHTML = '';
  const mainBlock = new CreateMainBlock(allButtons.mainBlock).init();
  const arrowBlock = new CreateArrowBlock(allButtons.arrowBlock).init();
  const numBlock = new CreateNumBlock(allButtons.numBlock).init();
  const keyboard = new CreateKeyboard(textarea, mainBlock, arrowBlock, numBlock).init();

  keyboard.onclick = () => {
    control.setLocalStorage();
    textarea.textContent = control.text;
    textarea.rows = control.rows();
    textarea.style.display = control.text === '' ? 'none' : 'flex';
    if (checkControl.caps !== control.caps
    || checkControl.num !== control.num
    || checkControl.shift !== control.shift
    || checkControl.language !== control.language
    || checkControl.alt !== control.alt) {
      document.body.replaceWith(document.body.cloneNode(true));
      keyboardInit();
      checkControl.text = control.text;
      checkControl.caps = control.caps;
      checkControl.num = control.num;
      checkControl.shift = control.shift;
      checkControl.alt = control.alt;
      checkControl.ctrl = control.ctrl;
      checkControl.insert = control.insert;
      checkControl.language = control.language;
    }
  };

  document.body.appendChild(keyboard);
}

keyboardInit();
