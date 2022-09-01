import store from "../store";

export const getLanguageCode = (): string => {
	const state = store.getState();
	return state?.language?.lang_code ? state?.language?.lang_code : "en";
};
