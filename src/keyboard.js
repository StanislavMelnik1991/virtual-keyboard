
import keyboardStyle from './style.css';

export const keyboard = {
    elements: {
        main: null,
        textarea: null,
        keysContainer: null,
        keys: []
    },
  
    eventHandlers: {
        oninput: null,
        onclose: null
    },
  
    properties: {
        value: "",
        capsLock: false
    },
  
    init() {
        
        this.elements.main = document.createElement('div');
        this.elements.textarea = document.createElement('textarea')
        this.elements.keysContainer = document.createElement('div');
        
        
        this.elements.main.className = keyboardStyle.keyboard;
        this.elements.textarea.className = keyboardStyle.text;
        this.elements.textarea.rows = 1;
        this.elements.textarea.readOnly = true;
        this.elements.textarea.wrap = 'hard';
        this.elements.keysContainer.className = keyboardStyle.keys;

        this.elements.keysContainer.appendChild(this.elements.textarea);
        this.elements.keysContainer.appendChild(this._createKeys());
  
        this.elements.keys = this.elements.keysContainer.querySelectorAll('.'+keyboardStyle.key);
        //console.log(this.elements.keys)
        
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);
  
        
        document.querySelectorAll("."+keyboardStyle.text).forEach(element => {
            
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            
        });
    },
  
    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
          'esc','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12',
          '`','1','2','3','4','5','6','7','8','9','0','-','=','backspace',
          'tab','q','w','e','r','t','y','u','i','o','p','[',']',
          'caps','a','s','d','f','g','h','j','k','l',';',"'", '\\' ,'enter',
          'shift','z','x','c','v','b','n','m',',','.','/',
          "ctrl","win","alt","space","alt Gr","win","ctrl"
        ];
  
        
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };
  
        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ['F12',"backspace", "]", "enter",'/'].indexOf(key) !== -1;
  
           
            keyElement.setAttribute("type", "button");
            keyElement.classList.add(keyboardStyle.key);
  
            switch (key) {
                case "backspace":
                    keyElement.classList.add(keyboardStyle.keyWide);
                    keyElement.innerHTML = createIconHTML("Backspace");
  
                    keyElement.onclick = () => {
                        if (this.properties.value[this.properties.value.length-1]==="\n"){
                            this.elements.textarea.rows -= 1
                        }
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        
                        this._triggerEvent("oninput");
                    };
  
                    break;
  
                case "caps":
                    keyElement.classList.add(keyboardStyle.keyWide, keyboardStyle.keyActivatable);
                    keyElement.innerHTML = createIconHTML("Caps Lock");
  
                    keyElement.onclick = () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle(keyboardStyle.keyActive, this.properties.capsLock);
                    };
  
                    break;
  
                case "enter":
                    keyElement.classList.add(keyboardStyle.keyWide);
                    keyElement.innerHTML = createIconHTML("Enter");
  
                    keyElement.onclick = () => {
                        this.elements.textarea.rows += 1;
                        this.properties.value += "\n";
                        this._triggerEvent("oninput");
                    };
  
                    break;
  
                case "space":
                    keyElement.classList.add(keyboardStyle.keyExtraWide);
                    keyElement.innerHTML = createIconHTML("");
  
                    keyElement.onclick = () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    };
  
                    break;
                    
                case "esc":
                    keyElement.classList.add(keyboardStyle.keyWide, keyboardStyle.keyDark);
                    keyElement.innerHTML = createIconHTML("Esc");
  
                    keyElement.onclick = () => {
                        this.properties.value = '';
                        this.elements.textarea.rows = 1;
                        this._triggerEvent("oninput");
                    };
  
                    break;
  
                default:
                    keyElement.textContent = key;
  
                    keyElement.onclick = () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
                    };
  
                    break;
            }
  
            fragment.appendChild(keyElement);
  
            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });
  
        return fragment;
    },
  
    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },
  
    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;
  
        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },
  
    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");
    },
  
    /* close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hidden");
    } */
  };