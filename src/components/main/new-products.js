import productImage1 from '../../img/Без_имени-7_qaku-tn.webp'
import StarIcon from '@mui/icons-material/Star';
import {ProductItem} from "./product-item";
import {useGetProductsQuery} from "../../store/slices/ProductSlice";
import {Link} from "react-router-dom";
export const NewProducts = () => {
    const {data}=useGetProductsQuery();
    let dataProducts=[];
    if(data!==undefined){
        dataProducts=[...data];
    }
    return (<>
        {data && <div className="container-xl flex flex-col mb-[15px]">
            <div className="flex flex-row">
                <p className="text-black text-[28px] font-bold">
                    Хиты продаж / Распродажа / Популярные
                </p>
            </div>
            <div className="flex flex-wrap flex-row justify-between">
                {
                    data?.map((item) => {
                        return <Link to={`/products/${item.id}`} key={item.id}><ProductItem key={item} {...item}/></Link>
                    })
                }
            </div>
        </div>
        }
            </>

    );
}