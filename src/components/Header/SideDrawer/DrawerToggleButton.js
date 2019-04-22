import React, { Component } from "react";
import "./DrawerToggleButton.css";
export default class SideDrawerButton extends Component {
	onToggle = () => {
		this.props.drawerClickHandler();
	};
	render() {
		return (
			<button className="toggle-button" onClick={this.onToggle}>
				<div className="toggle-button__line" />
				<div className="toggle-button__line" />
				<div className="toggle-button__line" />
			</button>
		);
	}
}
