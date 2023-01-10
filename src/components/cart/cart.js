import {Button} from "@mui/material";
export const Cart = () =>{
    return (
        <div className="container-xl">
            <p className="m-[10px]">Содержимое корзины</p>
            <div className="flex flex-col">
                <div className="flex flex-row justify-between m-[10px] p-[10px] rounded-md bg-slate-200" >
                    <Button className="color-[black]" variant="contained">Продолжить покупки</Button>
                    <Button variant="contained">Оформить заказ</Button>
                </div>
                <div className="flex flex-row"></div>
                <div className="flex flex-row"></div>
                <div className="flex flex-row"></div>
            </div>
        </div>
    );
}