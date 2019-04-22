import * as Types from "../constants/ActionType";
import callApi from "../utils/apiCaller";
import { findIndex } from "lodash";
//SHOW ALL PRODUCTS

export const actFetchProductsRequest = () => {
	return dispatch => {
		return callApi("products", "GET", null).then(res => {
			dispatch(actFetchProducts(res.data));
		});
	};
};

export const actFetchProducts = products => {
	return {
		type: Types.FETCH_PRODUCTS,
		products: products
	};
};
//SHOW ALL CARTS

export const actFetchCartsRequest = () => {
	return dispatch => {
		return callApi("carts", "GET", null).then(res => {
			dispatch(actFetchCarts(res.data));
		});
	};
};

export const actFetchCarts = carts => {
	return {
		type: Types.FETCH_CARTS,
		carts: carts
	};
};

//ADD TO CART

export const actAddToCartRequest = data => {
	let product = data.product;
	let quantity = data.quantity;

	const myData = {};
	myData.product = product;
	myData.quantity = quantity;

	return dispatch => {
		return callApi("carts", "POST", myData).then(res => {
			dispatch(actAddToCart(res.data));
		});
	};
};

export const actAddToCart = data => {
	return {
		type: Types.ADD_TO_CART,
		product: data.product,
		quantity: data.quantity
	};
};
