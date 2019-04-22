import * as Types from "../constants/ActionType";
import { findIndex } from "lodash";
let initState = [
	// {
	// 	product: {
	// 		id: null,
	// 		name: "",
	// 		price: null,
	// 		rating: null,
	// 		description: "",
	// 		image: ""
	// 	},
	// 	quantity: null
	// }
];

const cart = (state = initState, action) => {
	switch (action.type) {
		case Types.FETCH_CARTS:
			return action.carts;
		case Types.ADD_PRODUCT:
			console.log(action);
			let index = findIndex(state, item => {
				return item.product.id === action.product.id;
			});

			if (index !== -1) {
				state[index].quantity += action.quantity;
			} else {
				state.push({
					product: action.product,
					quantity: action.quantity
				});
			}
			return [...state];

		default:
			return state;
	}
};

export default cart;
