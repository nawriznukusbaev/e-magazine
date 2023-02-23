import HeaderUserPage from "./header";
import ReactVirtualizedTable from "./ordersTable";


export const UserPage = ()=>{
    return(
        <div className="w-full">
             <HeaderUserPage/>
            <div className="container-xl">
                <p className="text-blue-700 text-4xl mt-[20px]">Список заказов</p>
                <ReactVirtualizedTable/>
            </div>
        </div>
    )
}