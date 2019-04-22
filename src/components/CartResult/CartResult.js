import React, { Component } from "react";

export default class CartResult extends Component {
	render() {
		const { carts } = this.props;
		return (
			<tr>
				<td colSpan={3} />
				<td>
					<h4>
						<strong>Tổng Tiền</strong>
					</h4>
				</td>
				<td>
					<h4>
						<strong>{this.showTotalAlmount(carts)}$</strong>
					</h4>
				</td>
				<td colSpan={3}>
					<button
						type="button"
						className="btn btn-primary waves-effect waves-light"
					>
						Complete purchase
						<i className="fa fa-angle-right right" />
					</button>
				</td>
			</tr>
		);
	}
	showTotalAlmount = carts => {
		let result = 0;
		if (carts.length > 0) {
			result = carts.reduce((curentValue, cart) => {
				return curentValue + cart.product.price * cart.quantity;
			}, 0);
		}
		return result;
	};
}
