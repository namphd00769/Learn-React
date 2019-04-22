import * as Types from "../constants/ActionType";
import { findIndex } from "lodash";
const initState = [];
const products = (state = initState, action) => {
	switch (action.type) {
		// SHOW ALL PRODUCTS
		case Types.FETCH_PRODUCTS:
			return action.products;
		default:
			return state;
	}
};

export default products;
