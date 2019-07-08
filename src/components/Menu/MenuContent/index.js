import menuitems from "./menuitems";
const { Component } = hyperHTML;
export default class MenuContent extends Component {
  constructor(props) {
    super(props);
    this.menuitems = new menuitems();
  }
  get defaultState() {
    return {
      currentItem: "My music"
    };
  }
  onshows() {
    this.setState({
      currentItem: this.menuitems.title
    });
  }
  render() {
    return this.html`
    <div class="menuitems_contain"
     onshows=${this}>
     ${this.menuitems}</div>`;
  }
}
