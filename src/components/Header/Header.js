import React, { Component } from "react";

import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sideDrawerOpen: false
		};
	}
	drawerToggleClickHandler = () => {
		this.setState(state => {
			return {
				sideDrawerOpen: !state.sideDrawerOpen
			};
		});
	};

	backdropClickHandler = () => {
		this.setState(() => {
			return {
				sideDrawerOpen: false
			};
		});
	};
	render() {
		let backdrop;
		if (this.state.sideDrawerOpen) {
			backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />;
		}
		return (
			<div style={{ height: "100%" }}>
				<Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
				<SideDrawer show={this.state.sideDrawerOpen} />
				{backdrop}
			</div>
		);
	}
}
