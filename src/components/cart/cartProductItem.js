import {useDispatch} from "react-redux";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {increase,decrease,remove} from "../../store/slices/CartSlice";
export const CartProductItem = ({products,index}) =>{
    const dispatch=useDispatch();
    return (<tr>
        <td className="align-top px-[13px] py-[7px]"><img className="w-[150px]" src={`${products.image}`}/></td>
        <td className="w-[50%] align-top px-[13px] py-[7px]">
            <div className="flex flex-row">
                <p className="mr-[15px]">{products.name}</p>
                <button onClick={()=>dispatch(remove({'product_id':products.product_id,'index':index}))}>
                    <HighlightOffIcon style={{color:"red"}}/></button>

            </div>
        </td>
        <td className="align-top px-[13px] py-[7px]">{products.price} UZS</td>
        <td className="flex flex-row align-middle px-[13px] py-[7px]">
            <div className="flex flex-row justify-center items-center">
                <button className="bg-slate-100 px-[15px]  rounded" onClick={
                    ()=>dispatch(decrease(products.product_id))
                }>
                    <p className="text-3xl text-slate-400">-</p>
                </button>
                <span className="inline-block bg-slate-100 p-[6px]">{products.quantity}</span>
                <button className="bg-slate-100 px-[15px] rounded" onClick={
                    ()=>dispatch(increase(products.product_id))
                }>
                    <p className="text-3xl text-slate-400">+</p>
                </button>
            </div>
        </td>
        <td className="align-top px-[13px] py-[7px]">{products.quantity*products.price} UZS</td>
    </tr>)
}