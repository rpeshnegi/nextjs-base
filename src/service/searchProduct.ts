import { http } from "../helpers/Interceptor";
import api from "../helpers/api";

export const apiSearchProduct = async (request:any) => {
	return await http.post(api.PRODUCT_SEARCH, request).then((res) => res.data);
};
export const apiSearchProductForSearchBar = async (request:any) => {
	return await http
		.post(api.PRODUCT_SEARCH_FOR_SEARCH_BAR, request)
		.then((res) => res.data);
};
export const apiSearchPageProduct = async (request:any) => {
	return await http
		.post(api.PRODUCT_SEARCH_PAGE, request)
		.then((res) => res.data);
};

export const apiGetTrendingCategories = async () => {
	return await http.get(api.TRENDING_CATEGORIES).then((res) => res.data);
};
