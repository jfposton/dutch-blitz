import {LitElement, html} from 'lit';
import {Controls} from './Controls'
import {Scores} from './Scores'

export class App extends LitElement {
  static properties = {
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="container text-center">
        <div class="row">
            <db-controls></db-controls>
        </div>
        <div class="row">
            <db-scores></db-scores>
        </div>
      </div>
    `;
  }

  setChecked(event) {
    this.checked = event.target.checked;
  }
}

// Define custom elements here in the root javascript 
// file so webpack picks them up regardless of file
customElements.define('db-controls', Controls);
customElements.define('db-scores', Scores);
customElements.define('db-app', App);
