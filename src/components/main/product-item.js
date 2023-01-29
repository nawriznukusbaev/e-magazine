import productImage1 from "../../img/Без_имени-7_qaku-tn.webp";
import StarIcon from "@mui/icons-material/Star";

export const ProductItem = (props)=>{
    return (<div className="flex flex-col w-[248px] p-[10px] border-[1px] border-b-[0px] my-[5px] border-solid border-slate-200">
        <img src={props.images[0].image_path} className="mx-auto h-[248px] w-[248px] bg-no-repeat"  />

        <p>{props.name}</p>
        <div className="flex flex-row">
            <StarIcon style={{color:"red"}}/>
            <StarIcon style={{color:"red"}}/>
            <StarIcon style={{color:"red"}}/>
            <StarIcon style={{color:"red"}}/>
            <StarIcon style={{color:"red"}}/>
        </div>
        <div className="flex flex-row">
            <p className="line-through">{props.price}</p><p className="">UZS</p>
        </div>

        <p className="text-orange-700 text-2xl font-bold">{props.price}</p>

    </div>)
}