import React, { Component } from "react";
import "./SideDrawer.css";
import classNames from "classnames";
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
export default class SideDrawer extends Component {
	render() {
		console.log(this.props.show); // false => khong mo
		return (
			<nav
				className={classNames("side-drawer", {
					open: this.props.show
				})}
			>
				<ul>{this.showMenus(links)}</ul>
			</nav>
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
