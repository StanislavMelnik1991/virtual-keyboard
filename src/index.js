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
  const checkControl = {
    text: control.text,
    caps: control.caps,
    num: control.num,
    language: control.language,
    illumination: control.illumination,
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
    || checkControl.language !== control.language
    || checkControl.illumination !== control.illumination) {
      document.body.replaceWith(document.body.cloneNode(true));
      keyboardInit();
      checkControl.text = control.text;
      checkControl.caps = control.caps;
      checkControl.num = control.num;
      checkControl.language = control.language;
      checkControl.illumination = control.illumination;
    }
  };
  keyboard.onmouseup = () => {
    if (checkControl.language !== control.language) {
      document.body.replaceWith(document.body.cloneNode(true));
      keyboardInit();
      checkControl.language = control.language;
    }
  };

  document.body.appendChild(keyboard);
}

keyboardInit();
const instructions = document.createElement('p');
instructions.textContent = `
  press "Alt" + "Shift" or "Ctrl" + "Shift" or click "Language icon" to change language For any questions, please contact Discord: StanislavMelnik#6792
`;
document.body.prepend(instructions);

window.addEventListener('resize', () => {
  let tmp = control.num;
  control.num = !window.matchMedia('(max-width: 1200px)').matches;
  if (tmp !== control.num) {
    tmp = control.num;
    document.body.replaceWith(document.body.cloneNode(true));
    keyboardInit();
  }
});
