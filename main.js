(()=>{"use strict";var e={d:(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};e.d({},{J:()=>O});function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function e(n,t,r,a){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.textarea=n,this.mainBlock=t,this.arrowBlock=r,this.numBlock=a}var t,r;return t=e,(r=[{key:"init",value:function(){var e=document.createElement("div");e.className="ql3UWG2R0W7ugFE_68sQ",e.appendChild(this.textarea);var n=document.createElement("div");return n.className="MpgVrkC5GL2Li8_LUXmQ",n.appendChild(this.mainBlock),n.appendChild(this.arrowBlock),n.appendChild(this.numBlock),e.appendChild(n),e}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t;return n=e,(t=[{key:"init",value:function(){var e=document.createElement("div");return e.className="hydR2BWUF0wA36e38bAc",e}}])&&r(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}();const o="qUcHV1FPQYAO6GKzGWTw";var i={caps:!1,num:!0,shift:!1,alt:!1,ctrl:!1,insert:!1,language:"eng"},c=[[{eng:"Esc"},{eng:"F1"},{eng:"F2"},{eng:"F3"},{eng:"F4"},{eng:"F5"},{eng:"F6"},{eng:"F7"},{eng:"F8"},{eng:"F9"},{eng:"F10"},{eng:"F11"},{eng:"F12"}],[{eng:"`"},{eng:"1"},{eng:"2"},{eng:"3"},{eng:"4"},{eng:"5"},{eng:"6"},{eng:"7"},{eng:"8"},{eng:"9"},{eng:"0"},{eng:"-"},{eng:"="},{eng:"Backspace"}],[{eng:"Tab"},{rus:"й",eng:"q"},{rus:"ц",eng:"w"},{rus:"у",eng:"e"},{rus:"к",eng:"r"},{rus:"е",eng:"t"},{rus:"н",eng:"y"},{rus:"г",eng:"u"},{rus:"ш",eng:"i"},{rus:"щ",eng:"o"},{rus:"з",eng:"p"},{rus:"х",eng:"["},{rus:"ъ",eng:"]"},{eng:"Enter"}],[{eng:"Caps\nLock"},{rus:"ф",eng:"a"},{rus:"ы",eng:"s"},{rus:"в",eng:"d"},{rus:"а",eng:"f"},{rus:"п",eng:"g"},{rus:"р",eng:"h"},{rus:"о",eng:"j"},{rus:"л",eng:"k"},{rus:"д",eng:"l"},{rus:"ж",eng:";"},{rus:"э",eng:"'"},{rus:"\\",rusShift:"/",eng:"\\",engShift:"|"}],[{eng:"Shift"},{rus:"\\",rusShift:"/",eng:"\\",engShift:"|"},{rus:"я",eng:"z"},{rus:"ч",eng:"x"},{rus:"с",eng:"c"},{rus:"м",eng:"v"},{rus:"и",eng:"b"},{rus:"т",eng:"n"},{rus:"ь",eng:"m"},{rus:"б",eng:","},{rus:"ю",eng:"."},{rus:".",eng:"/"},{eng:"Shift"}],[{eng:"Ctrl"},{eng:"Win"},{eng:"Alt"},{eng:"Space"},{eng:"Alt Gr"},{eng:"Win"},{eng:"Ctrl"}]],l=[[{eng:"Print\nScreen"},{eng:"Scroll\nLock"},{eng:"Pause\nBreak"},{eng:"Insert"},{eng:"Home"},{eng:"Page\nUp"},{eng:"Delete"},{eng:"End"},{eng:"Page\nDown"}],[{eng:"arrowUp"},{eng:"arrowLeft"},{eng:"arrowBottom"},{eng:"arrowRight"}]],s=[{eng:"Num\nLock"},{eng:"/"},{eng:"*"},{eng:"-"},{eng:"7"},{eng:"8"},{eng:"9"},{eng:"+"},{eng:"4"},{eng:"5"},{eng:"6"},{eng:"1"},{eng:"2"},{eng:"3"},{eng:"Enter"},{eng:"0"},{eng:"."}];function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.symbol=n+""}var n,t;return n=e,(t=[{key:"create",value:function(){var e=this,n=document.createElement("button");switch(this.symbol.length>1?n.textContent=this.symbol:n.textContent=i.caps?this.symbol.toUpperCase():this.symbol.toLowerCase(),this.symbol){case"Esc":n.onclick=function(){O.textContent=""};break;case"F1":n.onclick=function(){alert("Help")};break;case"F2":case"F3":case"F4":case"F5":case"F6":case"F7":case"F8":case"F9":case"F10":case"F11":case"F12":break;case"Backspace":n.classList.add(o),n.onclick=function(){O.innerHTML=O.innerHTML.slice(0,O.innerHTML.length-1)};break;case"Enter":n.classList.add(o),n.onclick=function(){O.appendChild(document.createElement("br"))};break;case"Space":n.classList.add("NXOh2zQLBcgdOnEJzPCN"),n.textContent="",n.onclick=function(){O.innerHTML+="&nbsp"};break;case"Caps\nLock":n.classList.add(o),n.onclick=function(){i.caps=!i.caps};break;case"Tab":n.classList.add(o);break;case"Alt":case"Alt Gr":n.onmousedown=function(){i.alt=!i.alt},n.onmouseup=function(){i.alt=!i.alt};break;case"Ctrl":n.classList.add(o),n.onmousedown=function(){i.ctrl=!i.ctrl},n.onmouseup=function(){i.ctrl=!i.ctrl};break;case"Shift":n.classList.add(o),n.onmousedown=function(){i.shift=!i.shift},n.onmouseup=function(){i.shift=!i.shift};break;default:1===this.symbol.length&&(n.onclick=function(){O.innerHTML+=i.caps?e.symbol.toUpperCase():e.symbol.toLowerCase()})}return n}}])&&u(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}();function d(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw o}}}}function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function m(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t;return n=e,(t=[{key:"init",value:function(){var e=document.createElement("div");e.className="kfo1nCSzFqbSP6nxVxBA";var n,t=d(c);try{for(t.s();!(n=t.n()).done;){var r=n.value,a=document.createElement("div");a.classList="q5KIXQZpSofceSem0Y0d";var o,l=d(r);try{for(l.s();!(o=l.n()).done;){var s=o.value,u=s.eng;"eng"!==i.language&&(u=s.rus?s.rus:s.eng);var g=new f(u).create();g.classList.add("FSbXgUQjjUsViBIzefLl"),a.appendChild(g)}}catch(e){l.e(e)}finally{l.f()}e.appendChild(a)}}catch(e){t.e(e)}finally{t.f()}return e}}])&&m(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}();(new p).init();const v="fE3LR7btjGGCXX8wz5aI",y='<svg width="14" height="6" viewBox="0 0 14 6" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">\r\n<path d="M14 2V4H3V6L0 3L3 0V2H14Z" fill=""/>\r\n</svg>\r\n';function h(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?b(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw o}}}}function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function w(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t;return n=e,(t=[{key:"init",value:function(){var e=document.createElement("div");e.className="o5aWVHMXMJagsnknmQZH";var n,t=h(l);try{for(t.s();!(n=t.n()).done;){var r=n.value,a=document.createElement("div");a.className="I4wYZEh5Lnzz7OG_9jMm";var o,c=h(r);try{for(c.s();!(o=c.n()).done;){var s=o.value,u=new f(s.eng).create();switch(s.eng){case"arrowUp":u.innerHTML=y,u.children[0].style.transform="rotate(90deg)",u.style.gridColumn="2 / 4";break;case"arrowLeft":u.innerHTML=y;break;case"arrowRight":u.innerHTML=y,u.children[0].style.transform="rotate(180deg)";break;case"arrowBottom":u.innerHTML=y,u.children[0].style.transform="rotate(-90deg)"}"arrowBottom"===s.eng&&(u.innerHTML=y,u.children[0].style.transform="rotate(-90deg)"),u.className="wL0OcMhH10pwrvLryzYd",a.appendChild(u)}}catch(e){c.e(e)}finally{c.f()}e.appendChild(a)}}catch(e){t.e(e)}finally{t.f()}var d=document.createElement("div");d.className="ezl3DV0xSrnWxYpqks5a";var g=document.createElement("div");i.caps?g.style.backgroundColor="#08ff00":g.style.backgroundColor="rgb(60, 60, 60)",g.className=v,d.appendChild(g);var m=document.createElement("div");m.innerHTML="Caps Lock",d.appendChild(m);var p=document.createElement("div");p.addEventListener("click",(function(){i.num=!i.num})),p.className="VXfZ2PdC5aLs61tS9rYC";var b=document.createElement("div");i.num?b.style.backgroundColor="#08ff00":b.style.backgroundColor="rgb(60, 60, 60)",b.className=v,p.appendChild(b);var w=document.createElement("div");w.innerHTML="Num Lock",p.appendChild(w);var k=document.createElement("div");return k.textContent=i.language,k.className="UVNdtj1OIKAtoTAHdk86",i.num&&(d.style.display="none",p.style.display="none",k.style.display="none"),e.firstChild.appendChild(d),e.firstChild.appendChild(p),e.firstChild.appendChild(k),e}}])&&w(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}();const C="S4lsJV1r_Ef7eGwSc63D";function L(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function E(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t;return n=e,(t=[{key:"init",value:function(){var e=document.createElement("div");e.className="xRXqePak6ELwKZJdrDmo",i.num||(e.style.display="none");var n=document.createElement("div");n.className="MZM4raaMeU_u3sqEzwma";var t=document.createElement("div");i.caps?t.style.backgroundColor="#08ff00":t.style.backgroundColor="rgb(60, 60, 60)",t.className=C,n.appendChild(t);var r=document.createElement("div");r.innerHTML="Caps Lock",n.appendChild(r);var a=document.createElement("div");a.className="iGQU9qRZXHrGIX_L8Uq7";var o=document.createElement("div");i.num?o.style.backgroundColor="#08ff00":o.style.backgroundColor="rgb(60, 60, 60)",o.className=C,a.appendChild(o);var c=document.createElement("div");c.innerHTML="Num Lock",a.appendChild(c);var l=document.createElement("div");l.textContent=i.language,l.className="fNJ9sDoqBbXhzF3aL17b",e.appendChild(n),e.appendChild(a),e.appendChild(l);var u,d=function(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return L(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?L(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw o}}}}(s);try{for(d.s();!(u=d.n()).done;){var g=u.value,m=new f(g.eng).create();switch(m.className="GlDT_DK5rXm6gj0L9YrF",g.eng){case"Num\nLock":m.addEventListener("click",(function(){i.num=!i.num}));break;case"+":m.classList.add("KwvYjObcy5xBt1ZB7DCn");break;case"Enter":m.classList.add("RcD7GEGdGuhO2ggbPK84");break;case"0":m.classList.add("rTPs4ZM86ClEOZOJgpOH")}e.appendChild(m)}}catch(e){d.e(e)}finally{d.f()}return e}}])&&E(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}(),O=(new a).init();!function e(){var n=i.caps,r=i.num,a=i.shift,o=i.alt,c=(i.ctrl,i.insert,i.language);document.body.innerHTML="";var l=(new p).init(),s=(new k).init(),u=(new S).init(),f=new t(O,l,s,u).init();f.addEventListener("click",(function(){n===i.caps&&r===i.num&&a===i.shift&&c===i.language&&o===i.alt||e()})),document.body.appendChild(f)}()})();