import { Component, State, h } from '@stencil/core';
import { generateMaskString, replaceAll, getStringsFrequency } from '../../utils/utils';

@Component({
  tag: 'text-masking-component',
  styleUrl: 'text-masking-component.scss',
  shadow: true,
})
export class TestMaskingComponent {
  @State() phrases: string;
  @State() documentText: string;
  @State() maskedText: string;
  @State() analysisData: any[];
  @State() isCaseSentive: boolean = true;
  @State() isDynamicMaskLength: boolean = false;
  @State() delimiter: string = '';
  @State() words: string[] = [];
  @State() delimiters = [
    { name: 'Select', value: '' },
    { name: 'space', value: ' ' },
    { name: 'comma', value: ',' },
  ];

  private onInputChangeHandler = (event: Event) => {
    const { name, value } = event.target as HTMLInputElement;
    this[name] = value;
  };

  private onMaskedBtnClick = () => {
    let temp = '',
      isPhrasesStarted = false;
    this.words = [];
    for (let i = 0; i < this.phrases.length; i++) {
      if (this.phrases[i] === this.delimiter && !isPhrasesStarted) {
        this.words?.push(temp);
        temp = '';
      } else if ([`'`, `"`].includes(this.phrases[i])) {
        isPhrasesStarted = !isPhrasesStarted;
      } else {
        temp += this.phrases[i];
      }
    }
    if (temp) this.words.push(temp);

    this.maskedText = this.documentText;
    this.words.forEach(word => {
      this.maskedText = replaceAll(this.maskedText, word, this.isDynamicMaskLength ? generateMaskString(word?.length) : 'XXXX', { isCaseSentive: this.isCaseSentive });
    });
  };

  private onRunAnalysisClick = () => {
    const results = getStringsFrequency(this.documentText, this.words, this.isCaseSentive);
    results?.sort((a, b) => b.frequency - a.frequency);
    this.analysisData = results || [];
  };

  render() {
    return (
      <div class="mctcontainer">
        <div class="mctcontainer__header">
          <h1>Mask Censored Text</h1>
        </div>
        <div class="mctcontainer__main">
          <div class="mctcontainer__main__input_phrases">
            <h3 class="title">Keywords and phrases: </h3>
            <div class="input">
              <input class="input__phrases" name="phrases" placeholder="Enter string of keywords and phrases..." value={this.phrases} onInput={this.onInputChangeHandler} />
              <select class="input__delimiter" onChange={event => (this.delimiter = (event.target as HTMLSelectElement).value)}>
                {this.delimiters.map(item => (
                  <option value={item.value}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div class="mctcontainer__main__settings">
            <h3 class="title">Settings:</h3>
            <div class="mctcontainer__main__settings--actions">
              <div class="checkbox-area">
                <input type="checkbox" id="isCaseSentive" checked={this.isCaseSentive} onChange={() => (this.isCaseSentive = !this.isCaseSentive)} />
                <label htmlFor="isCaseSentive">Case sentive</label>
              </div>
              <div class="checkbox-area">
                <input type="checkbox" id="isDynamicMaskLength" checked={this.isDynamicMaskLength} onChange={() => (this.isDynamicMaskLength = !this.isDynamicMaskLength)} />
                <label htmlFor="isDynamicMaskLength">Dynamic masking</label>
              </div>
            </div>
            <div class="importent-note">
              <strong>*Note:</strong><span> please use single or doble quotes like <code>' or "</code> to wrap phrases.</span>
            </div>
          </div>
          <div class="mctcontainer__main__action only__desktop">
            <button class="button" onClick={this.onMaskedBtnClick}>
              Mask
            </button>
          </div>
          <div class="mctcontainer__main__panel">
            <textarea class="mctcontainer__main__panel--input-area textarea" name="documentText" placeholder="Enter document text..." value={this.documentText} onInput={this.onInputChangeHandler} />
            <div class="mctcontainer__main__panel--action only__mobile">
              <button class="button" onClick={this.onMaskedBtnClick}>
                Mask
              </button>
            </div>  
            <div class="mctcontainer__main__panel--masked-text label">
              <p>{this.maskedText}</p>
            </div>
          </div>
        </div>
        <div class="mctcontainer__analysis">
          <button class="button" onClick={this.onRunAnalysisClick}>
            Run Analysis
          </button>
          {this.analysisData?.map(item => (
            <div class="word-frequency">
              <strong>{item.word}</strong> occurs <strong>{item.frequency}</strong>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
