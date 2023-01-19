import productImage1 from '../../img/Без_имени-7_qaku-tn.webp'
import {AddShoppingCart} from "@mui/icons-material";
import Button from '@mui/material/Button';
import {useGetSingleProductQuery} from "../../store/slices/ProductSlice";
import {useParams} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {add} from "../../store/slices/CartSlice";
export const Product = () => {
    let {id} = useParams();
    const {data} = useGetSingleProductQuery(id);

    const dispatch = useDispatch();

    return (<>
        {data&&<div className="container-xl flex flex-col">
                <div className="flex flex-row my-[20px]">
                    <p className="text-3xl font-bold">{data.name}</p>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row w-[45%]">
                        <div className="flex flex-col w-[67px] mr-[50px]">
                            {data.images.map((item)=>{
                                return <a className="border border-current rounded-md p-[1px]"><img src={item.image_path}/></a>
                            })}
                        </div>
                        <div className="flex flex-col w-[calc(100%-67px)] ">
                            <div className="w-[415px]">
                                <img src={data.images[0].image_path}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row w-[55%]">
                        <div className="flex flex-col w-[50%] pr-[30px] pb-[30px]">
                            <div className="bg-slate-100 w-[150px] rounded-lg p-[12px] mb-[15px]">
                                <p className="text-yellow-500"><span className="font-bold">Гарантия: </span>1 год</p>
                            </div>
                            <div className="mb-[15px]">
                                <p><span className="font-bold">Цвет:  </span>Black</p>
                                <div className="flex flex-row">
                                    <a className="border border-current rounded-md w-[67px] p-[1px]"><img
                                        src={productImage1}/></a>
                                    <a className="border border-current rounded-md w-[67px] p-[1px]"><img
                                        src={productImage1}/></a>
                                    <a className="border border-current rounded-md w-[67px] p-[1px]"><img
                                        src={productImage1}/></a>
                                </div>
                            </div>
                            <div className="mb-[15px]">
                                <p className="mb-[5px]"><span className="font-bold ">Оперативная память:</span></p>
                                <div className="flex flex-row">
                                    <a className="border border-current rounded-md w-[60px] px-[12px] py-[15px]">
                                        <p className="inline">6 ГБ</p>
                                    </a>
                                </div>
                            </div>
                            <div>
                                {data.description}

                            </div>


                        </div>

                        <div className="flex flex-col w-[50%] p-[20px] rounded-md shadow-2xl">
                            <p className="text-2xl font-bold mb-[15px]">{data.price} UZS</p>
                            <p className="text-lime-600 mb-[15px]">В наличии</p>
                            <div className="flex flex-row mb-[15px]">
                                <div className="flex flex-row justify-center items-center mr-[15px]">
                                    <button className="bg-slate-100 px-[10px]  rounded">
                                        <p className="text-3xl text-slate-400">-</p>
                                    </button>
                                    <span className="inline-block bg-slate-100 p-[6px]">1</span>
                                    <button className="bg-slate-100 px-[10px] rounded">
                                        <p className="text-3xl text-slate-400">+</p>
                                    </button>
                                </div>
                                <Button variant="outlined" style={{width: "210px", height: "50px"}}
                                        startIcon={<AddShoppingCart/>}
                                        onClick={()=>dispatch(add(data))}
                                >
                                    В корзину
                                </Button>
                            </div>
                            <Button variant="contained" style={{width:"100%"}}>Купить в один клик</Button>

                        </div>
                    </div>
                </div>
                <div className="flex flex-row"></div>
                <div className="flex flex-row"></div>
            </div>
        }
        </>
)
               




}
