import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import Currency from "../../_types/Currency";
import { apiGetSupportCurrency } from "../../modules/Home/home-service";
import SelectInput from "../Form/fields/SelectInput";
import { changeCurrency } from "../../store/actions/currency";
import data from "../../localization/data";
import useIsMountedRef from "../../_hooks/useIsMountedRef";

type TSupportCurrencyProps = {
	code?: string
}

function SupportCurrency({ code }: TSupportCurrencyProps) {
	const [currency, setCurrency] = useState<string>("USD");
	// const { currency_code } = useSelector((state: RootState) => state.currency);
	const [currencyList, setCurrencyList] = useState<Currency[]>([]);
	const dispatch = useDispatch<AppDispatch>();
	const isMountedRef = useIsMountedRef();

	const changeCurrencies = (code: string) => {
		setCurrency(code);
		dispatch(changeCurrency(data?.code.toString()));
	};

	const getSupportCurrency = useCallback(async () => {
		if (isMountedRef.current) {
			const res = await apiGetSupportCurrency()
			setCurrencyList(res.data.data.map((row: any) => ({
				name: row.currency_code,
				code: row.currency_code,
			})))
			dispatch(changeCurrency('USD'))
		}
	}, [dispatch, isMountedRef]);

	useEffect(() => {
		getSupportCurrency();
	}, [getSupportCurrency]);

	return (
		<div className='sel-currancy'>
			<SelectInput value={currency} onChange={changeCurrencies} options={currencyList.map((row: Currency) => ({ lable: row.name, value: row.code }))} />
		</div>
	);
}

export default SupportCurrency;
