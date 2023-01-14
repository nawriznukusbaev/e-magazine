import productImage1 from '../../img/Без_имени-7_qaku-tn.webp'
import StarIcon from '@mui/icons-material/Star';
import {ProductItem} from "./product-item";
import {useGetProductsQuery} from "../../store/slices/ProductSlice";
import {Link} from "react-router-dom";
export const NewProducts = () => {
    const {data}=useGetProductsQuery();
    let dataProducts=[];
    console.log(data);
    if(data!==undefined){
        dataProducts=[...data];
    }
    console.log(dataProducts);
    return (
        <div className="container-xl flex flex-col mb-[15px]">
            <div className="flex flex-row">
                <p className="text-black text-[28px] font-bold">
                    Хиты продаж / Распродажа / Популярные
                </p>
            </div>
            <div className="flex flex-wrap flex-row justify-between">
                {
                    dataProducts.map((item)=>{
                        return <Link to={`/products/${item.id}`} key={item.id}><ProductItem key={item} props={item}/></Link>
                    })
                }
            </div>
        </div>
    );
}