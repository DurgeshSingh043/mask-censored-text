import { Component, State, h } from '@stencil/core';
import { generateMaskString, replaceAll } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  @State() phases: string;
  @State() documentText: string;
  @State() maskedText: string;
  
  isCaseSentive: boolean = false;
  delimiter: string = ' ';
  words: string[] = [];
  delimiters = [{ name: 'Select', value: ''}, { name: 'space', value: ' '}, { name: 'comma', value: ','}];

  private onInputChangeHandler = (event: Event) => {
    const {name, value} = (event.target as HTMLInputElement);
    this[name] = value;
  }

  private onMaskedClick = () => {
    // this.words = this.phases.split(this.delimiter);
    let temp = '', isPhasesStarted = false;
    for(let i = 0; i < this.phases.length; i++){
      if(this.phases[i] === this.delimiter && !isPhasesStarted){
        this.words?.push(temp);
        temp = '';
      } else if([`'`, `"`].includes(this.phases[i])) {
        isPhasesStarted = !isPhasesStarted;
      } else {
        temp += this.phases[i];
      }
    }
    if(temp) this.words.push(temp);

    this.maskedText = this.documentText;
    console.log('this.words: ', this.words);
    
    this.words.forEach((word) => {
      this.maskedText = replaceAll(this.maskedText, word, generateMaskString(word?.length), { isCaseSentive: this.isCaseSentive })
    })
  }

  private onDelimiterSelection = (event: Event) => {
    console.log('Delimiter: ', (event.target as HTMLSelectElement).value);
    
    this.delimiter = (event.target as HTMLSelectElement).value;
  }

  render() {
    return <div class="mctcontainer">
        <div class="mctcontainer__header">
          <h1>Mask Censored Text</h1>
        </div>
        <div class="mctcontainer__main">
          <div class="mctcontainer__main__input_phases">
            <h3>Keywords and phrases: </h3>
            <div class="input">
              <input class="input__phases" name="phases" value={this.phases} onInput={this.onInputChangeHandler}/>
              <select class="input__delimiter" onChange={this.onDelimiterSelection}>
                {this.delimiters.map(item => <option value={item.value}>{item.name}</option>)}
              </select>
            </div>
          </div>
          <div class="mctcontainer__main__action">
            <button onClick={this.onMaskedClick}>Masked</button>
          </div>
          <div class="mctcontainer__main__panel">
            <textarea class="mctcontainer__main__panel--input-area textarea" name="documentText" value={this.documentText} onInput={this.onInputChangeHandler}/>
            <p class="mctcontainer__main__panel--masked-text label">{this.maskedText}</p>
          </div>
        </div>
    </div>;
  }
}
