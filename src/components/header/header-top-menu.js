import logo from '../../img/elmakon.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import {Link} from "react-router-dom";
import * as React from "react";
import {OrderProducts} from "../userpage/orderProducts";
import Modal from "@mui/material/Modal";

export const HeaderTopMenu = () => {
    const [open, setOpen] = React.useState(false);
    const [itemId, setItemId] = React.useState(0);
    const handleOpen = (item) => {
        setOpen(true);

    };
    const handleClose = () => setOpen(false);
    return (
        <div className="w-full ">
            <div className="container-xl flex flex-row justify-between items-center mx-auto">
                <div className="">
                    <ul className="flex flex-row items-center">
                        <li className="py-[15px]">
                            <Link to={'/'}><img alt="Elmakon.ang" className="mr-[1vw] pr-[1vw] w-[220px] mr-[10px]" src={logo}/></Link>
                        </li>
                        <li>
                            <a href="#" className=" mr-[1vw] pr-[1vw] text-base  font-normal border-r border-solid border-inherit">
                                Смартфоны
                            </a>
                        </li>
                        <li>
                            <a href="#" className=" mr-[1vw] pr-[1vw] text-base  font-normal border-r border-solid border-inherit">
                                Ноутбуки
                            </a>
                        </li>
                        <li>
                            <a href="#" className=" mr-[1vw] pr-[1vw] text-base  font-normal border-r border-solid border-inherit">
                                Телевизоры
                            </a>
                        </li>
                        <li>
                            <a href="#" className=" mr-[1vw] pr-[1vw] text-base  font-normal border-r border-solid border-inherit">
                                Кондиционеры
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-base  font-normal">
                                Холодильники
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row mr-[10px]">
                        <div className="rounded-l-[5px] border border-solid border-slate-300 p-[8px]">
                            <FavoriteBorderIcon style={{color:"gray", height:"35px", width:"35px"}}/>
                        </div>
                        <div className="rounded-r-[5px] border border-solid border-slate-300 p-[8px]">
                            <StackedBarChartIcon style={{color:"gray", height:"35px", width:"35px"}}/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[22px] font-bold">
                            +998-90-653-53-07
                        </p>
                        <button className="text-base  underline decoration-dotted"
                        onClick={()=>handleOpen(true)}
                        >
                            Заказать обратный звонок
                        </button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <h1>Nawriz</h1>
                        </Modal>
                    </div>
                </div>

            </div>
        </div>
    )
}