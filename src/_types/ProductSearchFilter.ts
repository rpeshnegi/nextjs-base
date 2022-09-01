type ProductSearchFilter = {
    "page"?: number,
    "first"?: number,
    "filters"?: {
        "name"?: string,
        "price"?: { "min_price": null | number, "max_price": null | number },
        "ready_to_ship"?: number,
        "country_code"?: string[],
        "category_id"?: string[] | number[],
        "getfilters"?: number,
        "productFilter"?: any[]
    }
}

export default ProductSearchFilter
