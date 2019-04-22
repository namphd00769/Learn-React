import React, { Component } from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Route, Link } from "react-router-dom";
const links = [
	{
		name: "Home",
		to: "/",
		exact: true
	},
	{
		name: "Products",
		to: "/products",
		exact: true
	}
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
	return (
		<Route
			path={to}
			exact={activeOnlyWhenExact}
			children={() => {
				return (
					<li>
						<Link to={to}>{label}</Link>
					</li>
				);
			}}
		/>
	);
};
export default class Toolbar extends Component {
	render() {
		return (
			<header className="toolbar">
				<nav className="toolbar__navigation">
					<div className="toolbar__button">
						<DrawerToggleButton
							drawerClickHandler={this.props.drawerClickHandler}
						/>
					</div>
					<div className="toolbar__logo">
						<a href="/">Logo</a>
					</div>
					<div className="spacer" />
					<div className="toolbar__navigation-items">
						<ul>{this.showMenus(links)}</ul>
					</div>
				</nav>
			</header>
		);
	}
	showMenus = links => {
		let result = null;
		result = links.map((link, index) => {
			return (
				<MenuLink
					key={index}
					label={link.name}
					to={link.to}
					activeOnlyWhenExact={link.exact}
				/>
			);
		});
		return result;
	};
}
