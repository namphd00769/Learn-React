import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
const routes = [
	{
		path: "/",
		exact: true,
		content: () => <HomePage />
	},
	{
		path: "/products",
		exact: true,
		content: () => <ProductsPage />
	},
	{
		path: "",
		exact: false,
		content: () => <NotFoundPage />
	}
];
export default routes;
