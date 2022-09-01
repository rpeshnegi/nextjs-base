import { PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { CONSTANTS } from "../../helpers/constants";
import { currency } from "../action-types";

const initialState: CurrencyState = {
	currency_code: "USD",
};

const currencyReducer = persistReducer(
	{ storage, key: CONSTANTS.PERSIST_CURRENCY_KEY, whitelist: ["currency_code"] },
	(state: CurrencyState = initialState, action: PayloadAction<any>) => {
		switch (action.type) {
			case currency.CHANGE: {
				const { currency_code } = action.payload;
				return { ...state, currency_code };
			}
			default: {
				return state;
			}
		}
	}
);

export default currencyReducer;
