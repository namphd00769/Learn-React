import React, { Component } from "react";
import Product from "../Product/Product";

export default class Products extends Component {
	render() {
		return (
			<section className="section mt-5 pt-3">
				<h1 className="section-heading">Danh Sách Sản Phẩm</h1>
				<div className="row">
					{/* Product */}
					{this.props.children}
				</div>
			</section>
		);
	}
}
