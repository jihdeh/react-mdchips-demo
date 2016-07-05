require("./node_modules/materialize-css/dist/css/materialize.min.css")
require("./public/chips.css")
import React from 'react';
import ReactDOM from 'react-dom';
import MdInputChips from "react-mdchips";

export class App extends React.Component {
  addChip(chip) {
    console.log(chip);
  }
	render() {
		return (
			<div>
      <p>Simple Material Design Chips</p>
      <MdInputChips 
        placeholder="Tags" 
        containerClassName="social-tags"
        inputClassName="social-tags-input"
        max="10"
        onEnter={this.addChip.bind(this)}
      />
      </div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
