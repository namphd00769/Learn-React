import React, { Component } from "react";
import Message from "../../components/Message/Message";
import Products from "../../components/Products/Products";
import Product from "../../components/Product/Product";

import { connect } from "react-redux";
import {
	actFetchProductsRequest,
	actAddToCartRequest
} from "../../actions/index";
import CartContainer from "../../containers/CartContainer";
class ProductsPage extends Component {
	componentDidMount() {
		this.props.fetchAllProducts();
	}
	render() {
		const { products } = this.props;
		return (
			<div className="container">
				{/* Products  */}
				<Products>{this.showProducts(products)}</Products>
				{/* Message */}
				<Message />
				{/* Cart  */}
				<CartContainer />
			</div>
		);
	}
	showProducts = products => {
		let result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				return (
					<Product
						key={index}
						product={product}
						index={index}
						onAddToCart={this.props.onAddToCart}
					/>
				);
			});
		}
		return result;
	};
}
const mapStateToProps = state => {
	return {
		products: state.products
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		fetchAllProducts: () => {
			dispatch(actFetchProductsRequest());
		},
		onAddToCart: product => {
			dispatch(actAddToCartRequest({ product, quantity: 1 }));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductsPage);
