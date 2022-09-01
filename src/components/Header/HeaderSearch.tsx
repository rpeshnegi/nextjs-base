import { useSelector } from "react-redux";
import { RootState } from "../../store";
import SelectInput from "../Form/fields/SelectInput"
import Router, { useRouter } from "next/router";
import { routes } from "../../config/routes";
import { useState } from "react";

const HeaderSearch = () => {
    const { category } = useSelector((state: RootState) => state);
    const router = useRouter()
    const searchQuery: string = router.query?.name as string
    const [query, setQuery] = useState<string>(searchQuery || '')

    const selectProduct = () => {
        Router.push(`${routes.product.index.path}?name=${query}`)
    };

    return (
        <div className='all-cat w-100'>
            <div className='cat-wrap'>
                <SelectInput
                    // value={currency}
                    onChange={(value: string) => {
                        Router.push(`${routes.product.index.path}?name=${value}`)
                    }}
                    options={[
                        ...[{ lable: 'All Categories', value: '' }],
                        ...(category?.map((row: Category) => ({ lable: row.name, value: row.slug })) || [])
                    ]}
                />
            </div>
            <input type="text"
                defaultValue={searchQuery}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        selectProduct();
                    }
                }}
            />
            <button onClick={() => selectProduct()}>Search</button>
        </div>
    )
}

export default HeaderSearch
