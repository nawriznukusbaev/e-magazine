export const HeaderTop = () => {
    return (
        <div className="w-full border-b-[0.5px] border-slate-200 border-solid">
            <div className="container-xl flex flex-row justify-between items-center mx-auto">
                <ul className="flex flex-row font-sans">
                    <li className="p-[10px] text-[15-px] bg-[#b91c1c] text-white font-semibold">
                        <a href="#">Скидки до 40%</a>
                    </li>
                    <li className="p-[10px] text-[15-px] bg-orange-400 text-white font-semibold">
                        <a href="#">0% рассрочка</a>
                    </li>
                    <li className="p-[10px] text-[15-px]">
                        <a href="#">Статус рассрочки</a>
                    </li>
                    <li className="p-[10px] text-[15-px]">
                        <a href="#">Cashback</a>
                    </li>
                    <li className="p-[10px] text-[15-px]">
                        <a href="#">Samsung</a>
                    </li>
                    <li className="p-[10px] text-[15-px]">
                        <a href="#">Xiaomi</a>
                    </li>
                    <li className="p-[10px] text-[15-px]">
                        <a href="#">Адрес магазинов</a>
                    </li>

                </ul>
                <div className="p-[10px] border-l-[0.5px] border-slate-200 border-solid">
                    <p className="text-[15-px]">Рус</p>
                </div>
            </div>
        </div>
    );
}