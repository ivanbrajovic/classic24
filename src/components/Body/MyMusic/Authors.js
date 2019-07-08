const { Component } = hyperHTML;
import { Autor } from "../BodyCentral";
export class Authors extends Component {
  constructor() {
    super();

    this.Autor = new Autor();
  }
  render() {
    return this.html`
     <div class="author---body">
           ${this.Autor}
      </div>
`;
  }
}
