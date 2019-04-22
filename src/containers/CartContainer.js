import React, { Component } from "react";
import { connect } from "react-redux";
import * as Message from "../constants/Message";
import CartItem from "../components/CartItem/CartItem";
import Cart from "../components/Cart/Cart";
import CartResult from "../components/CartResult/CartResult";
import { actFetchCartsRequest } from "../actions/index";
class CartContainer extends Component {
	componentDidMount() {
		this.props.fetchAllCarts();
	}

	// componentWillReceiveProps(nextProps) {
	// 	nextProps.fetchAllCarts();
	// }

	render() {
		const { carts } = this.props;

		return (
			<Cart>
				{this.showCartItem(carts)}
				{this.showTotalAlmount(carts)}
			</Cart>
		);
	}
	showCartItem = carts => {
		let result = (
			<tr>
				<td>{Message.MSG_CART_EMPTY}</td>
			</tr>
		);
		if (carts.length > 0) {
			result = carts.map((cart, index) => {
				return <CartItem cart={cart} key={index} index={index} />;
			});
		}
		return result;
	};
	showTotalAlmount = carts => {
		if (carts.length > 0) {
			return <CartResult carts={carts} />;
		}
	};
}
const mapDispatchToProps = (dispatch, props) => {
	return {
		fetchAllCarts: () => {
			dispatch(actFetchCartsRequest());
		}
	};
};
const mapStateToProps = state => {
	return {
		carts: state.carts
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartContainer);
