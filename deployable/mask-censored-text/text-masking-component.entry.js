import { r as registerInstance, h } from './index-6f7325d8.js';

const escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
};
const replaceAll = (str, find, replace, option) => {
  // return str.replace(new RegExp(find, 'g'), replace);
  let flags = 'g';
  const { isCaseSentive } = option || {};
  if (!isCaseSentive) {
    flags += 'i';
  }
  return str.replace(new RegExp(escapeRegExp(find), flags), replace);
};
const storedMast = {};
const generateMaskString = (len) => {
  let result = '';
  if (storedMast[len] !== undefined) {
    return storedMast[len];
  }
  for (let i = 0; i < len; i++) {
    result += "X";
  }
  storedMast[len] = result;
  return result;
};
const getStringsFrequency = (text, words, isCaseSentive) => {
  const result = [];
  words === null || words === void 0 ? void 0 : words.forEach(word => {
    var _a, _b, _c;
    if (isCaseSentive) {
      result.push({ word, frequency: ((_a = text === null || text === void 0 ? void 0 : text.split(word)) === null || _a === void 0 ? void 0 : _a.length) - 1 });
    }
    else {
      result.push({ word, frequency: ((_c = (_b = text === null || text === void 0 ? void 0 : text.toLowerCase()) === null || _b === void 0 ? void 0 : _b.split(word === null || word === void 0 ? void 0 : word.toLowerCase())) === null || _c === void 0 ? void 0 : _c.length) - 1 });
    }
  });
  return result;
};

const textMaskingComponentCss = "@charset \"UTF-8\";:host{display:block}.mctcontainer{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;margin:-0.5rem;padding-bottom:3rem}@media only screen and (min-width: 992px){.mctcontainer{padding:0 1.5rem 3rem 1.5rem}}.mctcontainer__header{align-self:center;background-color:#d4f2ff;background-image:linear-gradient(45deg, rgba(189, 156, 207, 0) 50%, #bd9ccf);width:100%;display:flex;justify-content:center;align-items:center}@media only screen and (min-width: 992px){.mctcontainer__header{padding:0.5rem 0}}.mctcontainer__main{margin-top:0.5rem;width:100%}.mctcontainer__main__input_phases .input{display:flex}.mctcontainer__main__input_phases .input__phases{flex-grow:3;padding:0.5rem;display:inline-block;border:0.125rem solid #d4f2ff;background-color:#ffffff;border-radius:0.25rem;box-sizing:border-box;font-size:0.875rem}.mctcontainer__main__input_phases .input__phases:focus{outline:none;border:0.125rem solid #8bcce9}.mctcontainer__main__input_phases .input__delimiter{flex-grow:1;padding:0.5rem;margin-left:-4px;display:inline-block;border:0.125rem solid #d4f2ff;background-color:#ffffff;border-radius:0.25rem;box-sizing:border-box;font-size:0.875rem}.mctcontainer__main__input_phases .input__delimiter:focus{outline:none;border:0.125rem solid #8bcce9}.mctcontainer__main__settings{margin-top:0.5rem;background-color:#d4f2ff;background-image:linear-gradient(45deg, rgba(189, 156, 207, 0) 50%, #bd9ccf);width:100%}.mctcontainer__main__settings--actions{display:flex;flex-direction:column;padding:0.5rem}@media only screen and (min-width: 992px){.mctcontainer__main__settings--actions{flex-direction:row}}.mctcontainer__main__action{margin-top:0.5rem;display:none;justify-content:center;align-items:center}@media only screen and (min-width: 992px){.mctcontainer__main__action{display:flex}}.mctcontainer__main__panel{display:flex;flex-direction:column;width:100%;margin-top:0.5rem}@media only screen and (min-width: 992px){.mctcontainer__main__panel{flex-direction:row}}.mctcontainer__main__panel--input-area{padding:0.5rem;min-height:12.5rem;display:inline-block;border:0.125rem solid #d4f2ff;background-color:#ffffff;border-radius:0.25rem;box-sizing:border-box;font-size:0.875rem}.mctcontainer__main__panel--input-area:focus{outline:none;border:0.125rem solid #8bcce9}@media only screen and (min-width: 992px){.mctcontainer__main__panel--input-area{flex:1 1 50%;min-height:25rem;border-radius:0.25rem 0 0 0.25rem}}.mctcontainer__main__panel--action{align-self:center;margin:0.5rem 0}@media only screen and (min-width: 992px){.mctcontainer__main__panel--action{display:none}}.mctcontainer__main__panel--masked-text{background-color:#d4f2ff;background-image:linear-gradient(45deg, rgba(189, 156, 207, 0) 50%, #bd9ccf);padding:0.5rem;margin:0;min-height:12.5rem;max-height:12.5rem;overflow-wrap:break-word;overflow-y:auto;border-radius:0.25rem}@media only screen and (min-width: 992px){.mctcontainer__main__panel--masked-text{flex:1 1 50%;min-height:25rem;max-height:25rem;border-radius:0 0.25rem 0.25rem 0}}.mctcontainer__main__panel--masked-text p{margin:0}.mctcontainer__analysis{width:100%;margin-top:0.5rem}.mctcontainer__analysis .word-frequency{padding:0.5rem;margin-top:0.5rem}.mctcontainer__analysis .word-frequency:nth-child(even){background-color:#d4f2ff}.mctcontainer__analysis .word-frequency:nth-child(odd){background-color:#e3c9f2}.button{padding:0.5rem 1rem;display:inline-flex;justify-content:center;align-items:center;box-sizing:border-box;background-color:#d4f2ff;border-radius:0.25rem;font-size:1rem;cursor:pointer}.button:focus{box-shadow:0 2px 3px -1px #e3c9f2}@media only screen and (min-width: 668px){.button{padding:0.5rem 1.5rem}}@media only screen and (min-width: 992px){.button{padding:0.5rem 2rem}}.checkbox-area{margin:0.5rem 0.5rem 0 0}.checkbox-area input[type=checkbox]+label{display:block;margin:0.2em;cursor:pointer;padding:0.2em}.checkbox-area input[type=checkbox]{display:none}.checkbox-area input[type=checkbox]+label:before{content:\"✔\";border:0.1em solid #000;border-radius:0.2em;display:inline-block;width:1em;height:1em;padding-left:0.2em;padding-bottom:0.3em;margin-right:0.2em;vertical-align:bottom;color:transparent;transition:0.2s}.checkbox-area input[type=checkbox]+label:active:before{transform:scale(0)}.checkbox-area input[type=checkbox]:checked+label:before{background-color:MediumSeaGreen;border-color:MediumSeaGreen;color:#fff}.checkbox-area input[type=checkbox]:disabled+label:before{transform:scale(1);border-color:#aaa}.checkbox-area input[type=checkbox]:checked:disabled+label:before{transform:scale(1);background-color:#bfb;border-color:#bfb}.importent-note{color:red;padding:0.5rem 0.25rem}.title{margin:0.5rem 0.25rem;font-size:1.5rem}";

const TestMaskingComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isCaseSentive = true;
    this.isDynamicMaskLength = false;
    this.delimiter = '';
    this.words = [];
    this.delimiters = [
      { name: 'Select', value: '' },
      { name: 'space', value: ' ' },
      { name: 'comma', value: ',' },
    ];
    this.onInputChangeHandler = (event) => {
      const { name, value } = event.target;
      this[name] = value;
    };
    this.onMaskedBtnClick = () => {
      var _a;
      let temp = '', isPhasesStarted = false;
      this.words = [];
      for (let i = 0; i < this.phases.length; i++) {
        if (this.phases[i] === this.delimiter && !isPhasesStarted) {
          (_a = this.words) === null || _a === void 0 ? void 0 : _a.push(temp);
          temp = '';
        }
        else if ([`'`, `"`].includes(this.phases[i])) {
          isPhasesStarted = !isPhasesStarted;
        }
        else {
          temp += this.phases[i];
        }
      }
      if (temp)
        this.words.push(temp);
      this.maskedText = this.documentText;
      this.words.forEach(word => {
        this.maskedText = replaceAll(this.maskedText, word, this.isDynamicMaskLength ? generateMaskString(word === null || word === void 0 ? void 0 : word.length) : 'XXXX', { isCaseSentive: this.isCaseSentive });
      });
    };
    this.onRunAnalysisClick = () => {
      this.analysisData = getStringsFrequency(this.documentText, this.words, this.isCaseSentive);
    };
  }
  render() {
    var _a;
    return (h("div", { class: "mctcontainer" }, h("div", { class: "mctcontainer__header" }, h("h1", null, "Mask Censored Text")), h("div", { class: "mctcontainer__main" }, h("div", { class: "mctcontainer__main__input_phases" }, h("h3", { class: "title" }, "Keywords and phrases: "), h("div", { class: "input" }, h("input", { class: "input__phases", name: "phases", placeholder: "Enter string of keywords and phases...", value: this.phases, onInput: this.onInputChangeHandler }), h("select", { class: "input__delimiter", onChange: event => (this.delimiter = event.target.value) }, this.delimiters.map(item => (h("option", { value: item.value }, item.name)))))), h("div", { class: "mctcontainer__main__settings" }, h("h3", { class: "title" }, "Setting:"), h("div", { class: "mctcontainer__main__settings--actions" }, h("div", { class: "checkbox-area" }, h("input", { type: "checkbox", id: "isCaseSentive", checked: this.isCaseSentive, onChange: () => (this.isCaseSentive = !this.isCaseSentive) }), h("label", { htmlFor: "isCaseSentive" }, "Case sentive")), h("div", { class: "checkbox-area" }, h("input", { type: "checkbox", id: "isDynamicMaskLength", checked: this.isDynamicMaskLength, onChange: () => (this.isDynamicMaskLength = !this.isDynamicMaskLength) }), h("label", { htmlFor: "isDynamicMaskLength" }, "Dynamic masking"))), h("div", { class: "importent-note" }, h("strong", null, "*Note:"), h("span", null, " please use single or doble quotes like ", h("code", null, "' or \""), " to wrap phases."))), h("div", { class: "mctcontainer__main__action only__desktop" }, h("button", { class: "button", onClick: this.onMaskedBtnClick }, "Masked")), h("div", { class: "mctcontainer__main__panel" }, h("textarea", { class: "mctcontainer__main__panel--input-area textarea", name: "documentText", placeholder: "Enter document text...", value: this.documentText, onInput: this.onInputChangeHandler }), h("div", { class: "mctcontainer__main__panel--action only__mobile" }, h("button", { class: "button", onClick: this.onMaskedBtnClick }, "Masked")), h("div", { class: "mctcontainer__main__panel--masked-text label" }, h("p", null, this.maskedText)))), h("div", { class: "mctcontainer__analysis" }, h("button", { class: "button", onClick: this.onRunAnalysisClick }, "Run Analysis"), (_a = this.analysisData) === null || _a === void 0 ? void 0 :
      _a.map(item => (h("div", { class: "word-frequency" }, h("strong", null, item.word), " occurs ", h("strong", null, item.frequency)))))));
  }
};
TestMaskingComponent.style = textMaskingComponentCss;

export { TestMaskingComponent as text_masking_component };
