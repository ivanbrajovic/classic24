const { Component } = hyperHTML;
export default class MenuButton extends Component {
  constructor() {
    super();
    this.checked = false;
  }
  get defaultState() {
    return {
      display: true
    };
  }
  onclick(event) {
    this.checked = event.target.checked;
    this.dispatch("menuhide", this.checked);
  }
  render() {
    return this.html`<label style=${{
      display: this.state.display ? "block" : "none"
    }}>
        <div class="menu-button"><input type="checkbox" 
              name="check-menu-button"
              id="check-menu-button"     
              onclick="${this}"/>
              <div class="menu-lines">
              <div class="menu-line"></div>
              <div class="menu-line"></div>              
              <div class="menu-line"></div>
          </div></div></label>`;
  }
  update(props) {
    this.props = props;
    return this.render();
  }
}
