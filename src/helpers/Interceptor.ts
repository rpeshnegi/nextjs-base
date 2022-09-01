import { useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";
// import { handleMessage } from "store/actions/global";
import { handleMessage } from './../store/actions/global';

export const http = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	timeout: 9000000,
});

/**
 * Request intercept
 *
 * @param {*} store
 */
const requestIntercept = (store: any) => {
	return http.interceptors.request.use(
		// Fetch access token
		(config: any) => {
			const state = store.getState();
			config.headers["Accept-Language"] = state?.language?.lang_code;
			config.headers["Accept-Price"] = state?.currency?.currency_code;
			const {
				auth: {
					authToken: { access_token },
				},
			} = store.getState();

			if (access_token)
				config.headers.Authorization = `Bearer ${access_token}`;
			return config;
		},
		(err) => Promise.reject(err)
	);
};

/**
 * Respopnse intercept
 *
 * @param {*} store
 */
const responseIntercept = (store: any) => {
	return http.interceptors.response.use(
		(response) => {
			return response;
		},
		async (error) => {
			console.log(error)
			if (error.response) {
				store.dispatch(
					handleMessage({
						type: "error",
						message: error?.response?.data?.message,
					})
				);
				if (error.response?.status === 401) {
					localStorage.clear()
					window.location.href = "/";
					store.dispatch(
						handleMessage({
							type: "error",
							message: error?.response?.data?.message,
						})
					);
				}
				// Get previous request
				//const originalRequest = error.response.config;
				return Promise.reject(error.response);
			}
			return Promise.reject(error);
		}
	);
};

/**
 * Add auth token if not expired
 *
 * @param {*} store
 */
const Interceptor = ({ store, children }: { store: any, children: any }) => {
	useEffect(() => {
		const req = requestIntercept(store);
		const res = responseIntercept(store);
		return () => {
			http.interceptors.request.eject(req);
			http.interceptors.response.eject(res);
		};
	}, [store]);

	return children;
};

export default Interceptor;
