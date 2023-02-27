import {Button} from "@mui/material";
import {CartProductItem} from "./cartProductItem";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {getCookie, getJwtToken} from "../../utils";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {useAddOrderMutation} from "../../store/slices/OrdersSlice";
import {useGetUsersQuery} from "../../store/slices/UserSlice";
import jwtDecode from "jwt-decode";
export const Cart = () => {
    const products=useSelector(state => state.cart.products);
    const {data:users} = useGetUsersQuery();
    const user=jwtDecode(getCookie('token')).sub;
    const userData=users.filter(users=>users.username===user);
    const navigate=useNavigate();
    const {add}=useAddOrderMutation();
    const checkout = ()=>{
        if(getCookie('token')===undefined){
            toast.warn(`Вы не аторизиваны!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setTimeout(()=>{
                navigate('/login');
            },3000);
        }
        else if(getJwtToken('token').is_admin!==0){
            toast.error(`Вы  аторизиваны как администратор, пожалуйство авторизуйтесь как пользователь!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            let date = new Date().toISOString().slice(0,10);
            const productsArr=products.filter(item=>item.name);
            console.log(productsArr);
           /* const body={
                "order": {
                    "user_id": userData[0].id,
                    "order_date": date,
                    "address_id":userData[0].addresses[0].country.country_name+", "
                        +userData[0].addresses[0].city+", "
                        +userData[0].addresses[0].street_address+", postal code:"
                        +userData[0].addresses[0].postal_code,
                    "order_status_id": 1
                },
                "order_details": [
                    {
                        "product_id": 1,
                        "quantity": 2,
                        "price": 1000
                    },

                ]
            }*/
            }

        }

    if(products.length>0){
        return (
            <div className="container-xl">
                <p className="m-[15px] text-3xl font-[750]">Содержимое корзины</p>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between m-[15px] p-[15px] rounded-md bg-slate-200">
                        <Button className="color-[black]" variant="contained">Продолжить покупки</Button>
                        <Button variant="contained" onClick={()=>checkout()}>Оформить заказ</Button>
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
                        <Button className="color-[black]" variant="contained"><Link to={'/'}>Продолжить покупки</Link></Button>
                        <Button variant="contained" onClick={()=>checkout()}>Оформить заказ</Button>
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