import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import SelectInput from "../Form/fields/SelectInput";
import { changeLanguage } from "../../store/actions/language";
import { strings } from "../../localization/data";

interface ILanguage {
	name: string
	code: string
}
export const languages: ILanguage[] = [
	{ name: "English", code: "en" },
	{ name: "Spanish", code: "es" },
];

function Language() {
	const [lang, setLang] = useState<string>("en");
	const { language } = useSelector((state: RootState) => state);
	// console.log(language)

	const dispath = useDispatch<AppDispatch>();
	// const navigate = useNavigate();

	useEffect(() => {
		const obj = getSelectedLanguage(language?.lang_code || 'en');
		if (obj.code !== lang) {
			setLang(obj.code);
		}
	}, []);

	const changeLang = (code: string) => {
		console.log(code)
		// dispath(changeLanguage(code));
		// setLang(code);
		// setTimeout(() => {
		// 	// navigate(0);
		// }, 1);
	};

	const getSelectedLanguage = (code: string) => {
		let obj = null;
		languages.map((lang) => {
			if (lang.code === code) {
				obj = lang;
			}
			return lang;
		});
		if (obj === null) {
			obj = { name: "English", code: "en" };
		}
		return obj;
	};
	return (
		<div className='sel-language'>
			<SelectInput value={lang} onChange={changeLang} options={languages.map((row: ILanguage) => ({ lable: row.name, value: row.code }))} />
		</div>
	);
}

export default Language;
