import React, { Component } from "react";
import routes from "./routes";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Message from "./components/Message/Message";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
	render() {
		return (
			<Router>
				<div>
					{/* Header  */}
					<Header />
					<main id="mainContainer">{this.showContentMenus(routes)}</main>
					{/* Footer */}
					<Footer />
				</div>
			</Router>
		);
	}

	showContentMenus = routes => {
		let result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.content}
					/>
				);
			});
		}

		return <Switch>{result}</Switch>;
	};
}

export default App;
