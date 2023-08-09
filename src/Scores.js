import {LitElement, html} from 'lit';

export class Scores extends LitElement {
    static properties = {
    };
  
    constructor() {
      super();
    }
  
    render() {
        return html`
            <div id="scores" class="col">
                <p>Column Two</p>
            </div>
        `
    }
  }
  