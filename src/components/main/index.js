import {NewProducts} from "./new-products";
import {TechniqueCategories} from "./techniq-categories";
import {useGetProductsQuery} from "../../store/slices/ProductSlice";
export const Main=()=>{

    return (
        <div id="main">
            <TechniqueCategories/>
            <NewProducts/>
        </div>
    )
}