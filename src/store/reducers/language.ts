import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PayloadAction } from "@reduxjs/toolkit";
import { CONSTANTS } from "../../helpers/constants";
import { language } from "../action-types";

const initialState: LanguageState = {
	lang_code: "en",
};

const languageReducer = persistReducer(
	{ storage, key: CONSTANTS.PERSIST_LANGUAGE_KEY, whitelist: ["lang_code"] },
	(state: LanguageState = initialState, action: PayloadAction<any>) => {
		switch (action.type) {
			case language.CHANGE: {
				const { lang_code } = action.payload;
				return { ...state, lang_code };
			}
			default: {
				return state;
			}
		}
	}
);

export default languageReducer;
