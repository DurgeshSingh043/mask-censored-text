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
  words: string[];

  private onInputChangeHandler = (event: Event) => {
    const {name, value} = (event.target as HTMLInputElement);
    this[name] = value;

    // if(this.documentText){
    //   this.maskedText = this.replaceAll(this.documentText, this.maskedText, 'XXXX')
    // }
  }

  private onMaskedClick = () => {
    this.words = this.phases.split(this.delimiter);
    this.maskedText = this.documentText;
    this.words.forEach((word) => {
      this.maskedText = replaceAll(this.maskedText, word, generateMaskString(word?.length), { isCaseSentive: this.isCaseSentive })
    })
  }

  render() {
    return <div class="mctcontainer">
        <div class="mctcontainer__header">
          <h3>Mask Censored Text</h3>
        </div>
        <div class="mctcontainer__main">
          <div class="mctcontainer__main__input_phases">
            <label>Keywords and phrases</label>
            <input class="input__phases" name="phases" value={this.phases} onInput={this.onInputChangeHandler}/>
          </div>
          <div>
            <button onClick={this.onMaskedClick}>Masked</button>
          </div>
          <div class="mctcontainer__main__input_text">
            <textarea class="textarea" name="documentText" value={this.documentText} onInput={this.onInputChangeHandler}/>
            <label class="textarea label">{this.maskedText}</label>
          </div>
        </div>
    </div>;
  }
}
