const { Component } = hyperHTML;
export default class MenuSeach extends Component {
  get defaultState() {
    return {
      focus: 1,
      value: "",
      search: false
    };
  }
  focus() {
    this.setState({
      focus: 0,
      showOnly: false
    });
  }
  exit() {
    this.setState({
      value: ""
    });
  }
  types(event) {
    this.setState({
      value: event.target.value
    });
  }
  search(event) {
    this.title = "Search";
    const checkbox = document.getElementById("check-menu-button");
    checkbox.checked && checkbox.click();
    const inputtx =
      event.currentTarget.previousElementSibling.previousElementSibling;
    inputtx.focus(), inputtx.click();
    this.dispatch("serach___", inputtx.value);
    inputtx.value.replace(/\s/g, "").length > 0 &&
      document.querySelector(".serach---items--- a").click();
  }
  render() {
    return this.html`<div class="searchfiled" 
       style="${{
         backgroundColor: !this.state.focus
           ? "#fff"
           : !this.state.showOnly
           ? "#00000050"
           : "transparent",
         width: !this.state.showOnly ? "280px" : "300px",
         left: !this.state.showOnly ? "10px" : "0"
       }}">      
      <input type="text" name="search" id="inputsearch"         
               spellcheck="false"
                placeholder="Search" autocomplete='off'
                value=${this.state.value}
                oninput=${this.types.bind(this)}
                onclick=${this.focus.bind(this)}                
                style="${{
                  display: !this.state.showOnly ? "flex" : "none",
                  color: !this.state.focus ? "#333" : "white"
                }}"/>
            <div class="exit-search" onclick=${this.exit.bind(this)}
                style="${{
                  opacity: this.state.value ? 1 : 0,
                  display: !this.state.showOnly ? "flex" : "none",
                  filter: "invert(1)"
                }}">        
          <img src="./src/images/exit.png" 
          alt="stop search"/>
          </div>  
          <div class="conf-search" 
                onclick=${this.search.bind(this)}       
              style=${{
                width: !this.state.showOnly ? "40px" : "50px",
                height: !this.state.showOnly ? "40px" : "50px",
                filter: !this.state.focus ? "invert(1)" : "invert(0)"
              }}><img src="./src/images/search.png" alt="search"/>     
        </div> </div>`;
  }
}
