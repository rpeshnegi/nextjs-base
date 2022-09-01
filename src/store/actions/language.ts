import { AppDispatch } from "..";
import { language } from "../action-types";

export const changeLanguage = (code: string) => async (dispatch: AppDispatch) => {
	dispatch({
		type: language.CHANGE,
		payload: {
			lang_code: code,
		},
	});
};
