import {getCookie, getJwtToken} from "../../utils";
import {toast} from "react-toastify";
import jwtDecode from "jwt-decode";
import {useGetUsersQuery} from "../../store/slices/UserSlice";
import {useNavigate} from "react-router-dom";
import {useAddOrderMutation} from "../../store/slices/OrdersSlice";
import {useSelector} from "react-redux";
import 'react-toastify/dist/ReactToastify.css'

export const checkout = () =>{
    const products=useSelector(state => state.cart.cartProducts);
    const {data} = useGetUsersQuery();
    const navigate=useNavigate();
    const [addOrder]=useAddOrderMutation();
        if(getCookie('token')===undefined){
            toast.warn(`Вы не аторизованы!`, {
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
            const user=jwtDecode(getCookie('token')).sub;
            const userData=data.filter(users=>users.username===user);
            let date = new Date().toISOString().slice(0,10);
            console.log(userData[0].addresses[0].country.id);
            const body={
                "order": {
                    "user_id": userData[0].id,
                    "order_date": date,
                    "address_id":userData[0].addresses[0].country.id,
                    "order_status_id": 1
                },
                "order_details": products
            }

            addOrder(body).unwrap().then(response=>{
                toast.success('Заказ успешно добавлен!',{
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })

            }).catch(error=>{
                toast.error(`${error.data.detail}`,{
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            });

        }


}