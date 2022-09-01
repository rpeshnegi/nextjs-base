import { ReactNode } from "react"

interface ISelectInputProp {
    options: TSelectOption[]
    onChange?: any,
    value?: any,
    className?: any
}
const SelectInput = ({ options, onChange, value, className }: ISelectInputProp) => {

    const changeHandler = (e: any) => {
        if (onChange) onChange(e.target.value)
    }
    return (
        <select className={className} defaultValue={value} onChange={changeHandler}>
            {options.length > 0 && options.map((item): ReactNode => (
                <option key={item.value} value={item.value}>{item.lable}</option>
            ))}
        </select>
    )
}

export default SelectInput
