import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import Currency from "../../_types/Currency";

// interface ICurrencyProp {
// 	code: string
// 	changeLanguage: string

// }

function Currency() {
	const [currency, setCurrency] = useState<Currency>({ name: "USD", code: "USD" });

	const currencies = [
		{ name: "USD", code: "USD" },
		{ name: "INR", code: "INR" },
	];

	const changeCurrencies = (data: Currency) => {
		setCurrency(data);
	};

	return (
		<Dropdown
			optionLabel="name"
			value={currency}
			className="custom-language"
			options={currencies}
			onChange={(e) => changeCurrencies(e.value)}
			placeholder="Currency"
		/>
	);
}

export default Currency;
