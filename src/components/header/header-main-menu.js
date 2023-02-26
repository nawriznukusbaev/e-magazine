import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DehazeIcon from '@mui/icons-material/Dehaze';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";
import Badge from "@mui/material/Badge";
import {useSelector} from "react-redux";
export const HeaderMainMenu = ({children}) => {
        const productState=useSelector(state => state.cart);
        const countProduct=productState.count;
        console.log(countProduct);
        return (
        <>
            <div className="w-full bg-[#007aff]">
                <div className="container-xl flex flex-row justify-between items-center mx-auto">
                    <div className="h-[56px] flex flex-row items-center pl-[35px] pr-[50px]">
                        <DehazeIcon style={{color: "white", marginRight: "10px"}}/>
                        <p className="text-white text-[18px] leading-4 font-extrabold">Каталог товаров</p>

                        <ExpandMoreIcon style={{color: "white"}}/>
                    </div>
                    <div className="flex flex-row items-center">
                        <input className="h-[40px] w-[600px] rounded-md" placeholder="Поиск товаров"/>
                        <div className="rounded-md p-[15px] ">
                            <SearchIcon style={{color:"white",fontWeight:"bold"}}/>
                        </div>

                    </div>

                    <div className="flex flex-row items-center">
                        {children}
                        <div className="flex flex-row items-center p-[15px]">

                            <Badge badgeContent={countProduct} color="success" style={{ marginRight:"15px"}}>
                                <ShoppingCartIcon style={{color: "white"}}/>
                            </Badge>
                            <Link to={'cart'}><p className="text-white text-[18px] leading-4 font-extrabold">Корзина</p>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}