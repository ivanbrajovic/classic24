const { wire, Component } = hyperHTML;
import { songList } from "../BodyCentral";
export class Song extends Component {
  constructor() {
    super();
    this.songList = new songList();
  }
  get defaultState() {
    return {
      background__: "linear-gradient(to right, #111111, transparent, #000000)",
      inverts_: "invert(0)"
    };
  }
  render() {
    return this.html`
 <table>
    <thead>
        <tr class="table1-header-lists" 
        style=${{
          background: this.state.background__
        }}>
            <th class="add----ply"><div class='dodaj-u__listu-main1 dodaj-u__listu-main'>&nbsp;&nbsp;
               <div id="number-of-adding-plays____"></div>
            </div> </th>
            <th>play</th><th>song</th><th>author
            </th><th>album</th><th class="periods---show---hide">period</th>
            <th>duration</th>
        <tr>
        </thead>
        <tbody style=${{
          filter: this.state.inverts_
        }}>                 
        ${this.songList}
        </tbody>
   </table>

`;
  }
}
