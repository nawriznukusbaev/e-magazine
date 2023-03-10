import HeaderUserPage from "./header";
import Orders from "./orders";
import {useGetUsersQuery} from "../../store/slices/UserSlice";
import jwtDecode from "jwt-decode";
import {getCookie} from "../../utils";


export const UserPage = ()=>{
    const {data} = useGetUsersQuery();
    console.log(data);
    const user=jwtDecode(getCookie('token')).sub;
    var userData=[];
    if(!!data){
        userData=data?.find(data=>data.username===user);
    }


    console.log('userss',userData);

    return(
        <div className="w-full">
             <HeaderUserPage/>
            <div className="container-xl">
                <p className="text-blue-700 text-4xl mt-[20px]">Список заказов</p>
                <Orders users={data}/>
            </div>
        </div>
    )
}