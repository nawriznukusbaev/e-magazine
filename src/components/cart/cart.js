import {Button} from "@mui/material";
import phoneImg from "../../img/telefon.webp"
import {CartProductItem} from "./cartProductItem";
import {useSelector} from "react-redux";
export const Cart = () => {
    const products=useSelector(state => state.cart.products);
    if(products.length>0){
        return (
            <div className="container-xl">
                <p className="m-[15px] text-3xl font-[750]">Содержимое корзины</p>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between m-[15px] p-[15px] rounded-md bg-slate-200">
                        <Button className="color-[black]" variant="contained">Продолжить покупки</Button>
                        <Button variant="contained">Оформить заказ</Button>
                    </div>
                    <div className="flex flex-row">
                        <table className="w-[100%]">
                            <thead>
                            <tr>
                                <th className="ml-[7xp] p-[12px]">Товар</th>
                                <th className="px-[13px] p-[12px]"></th>
                                <th className="px-[13px] p-[12px]">Цена за ед.</th>
                                <th className="px-[13px] p-[12px]">Кол-во</th>
                                <th className="">Цена продукта уплачена</th>
                            </tr>
                            </thead>
                            <tbody >
                            {products.map((item,index)=>{
                                return <CartProductItem key={item.product_id} products={item} index={index}/>
                            })}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-row justify-end mx-[15px] p-[15px] border-[0.5px] border-solid border-inherit">
                        <p className="mr-[25px] text-slate-400 text-[25px] font-semibold">Итоговая сумма</p>
                        <p className="text-[25px] font-semibold">
                            {products.map((item)=>{
                                let count=0;
                                count+=item.price*item.quantity;
                                return count
                            })}
                            UZS</p>
                    </div>
                    <div className="flex flex-row justify-between m-[15px] p-[15px] rounded-md bg-slate-200">
                        <Button className="color-[black]" variant="contained">Продолжить покупки</Button>
                        <Button variant="contained">Оформить заказ</Button>
                    </div>

                </div>
            </div>
        );
    }
    else {
        return (<div className="container-xl flex justify-center h-[300px]">
            <p className="text-3xl mt-[100px]">Корзина пуст</p>
        </div>)
    }

}