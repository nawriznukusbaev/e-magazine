import phoneImg from "../../img/telefon.webp";

export const CartProductItem = (item) =>{
    return (<tr>
        <td className="align-top px-[13px] py-[7px]"><img className="w-[150px]" src={`${phoneImg}`}/></td>
        <td className="w-[50%] align-top px-[13px] py-[7px]">
            <div className="flex flex-col">
                <p>Xiaomi Redmi Note 11 4/64GB, Graphite Gray (Global)</p>
            </div>
        </td>
        <td className="align-top px-[13px] py-[7px]">2.359.000 UZS</td>
        <td className="flex flex-row align-middle px-[13px] py-[7px]">
            <div className="flex flex-row justify-center items-center">
                <button className="bg-slate-100 px-[15px]  rounded">
                    <p className="text-3xl text-slate-400">-</p>
                </button>
                <span className="inline-block bg-slate-100 p-[6px]">1</span>
                <button className="bg-slate-100 px-[15px] rounded">
                    <p className="text-3xl text-slate-400">+</p>
                </button>
            </div>
        </td>
        <td className="align-top px-[13px] py-[7px]">2.359.000 UZS</td>
    </tr>)
}