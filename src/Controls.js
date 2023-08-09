import {LitElement, html} from 'lit';

export class Controls extends LitElement {
    static properties = {
    };
  
    constructor() {
      super();
    }
  
    render() {
        return html`
            <div id="controls" class="col">
                <p>Column One</p>
            </div>
        `
    }
}