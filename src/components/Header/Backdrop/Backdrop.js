import React, { Component } from "react";
import "./Backdrop.css";
export default class Backdrop extends Component {
	onClick = () => {
		this.props.backdropClickHandler();
	};
	render() {
		return <div className="back-drop" onClick={this.onClick} />;
	}
}
