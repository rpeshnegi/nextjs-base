import { AppDispatch } from "..";
import { currency } from "../action-types";

export const changeCurrency = (code: string) => async (dispatch: AppDispatch) => {
	dispatch({
		type: currency.CHANGE,
		payload: {
			currency_code: code,
		},
	});
};
