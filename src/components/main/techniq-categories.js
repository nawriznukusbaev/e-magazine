import phoneImage from '../../img/Smartfon__2_.webp'
import heaterImage from '../../img/Obogrev.webp'
import kitchenAppleancesImage from '../../img/Dud__2__2ia0-97.webp'
import householdAppleancesImage from '../../img/Maishiy__2_.webp'
import gamingImage from '../../img/Gaming__2__br71-3y.webp'
import autoImage from '../../img/Avto__2__bugz-k9.webp'
import laptopImage from '../../img/Noutbuk__3__spmx-xe.webp'
import tvImage from '../../img/TV_audio__2__y8o3-73.webp'

export const TechniqueCategories = () => {
    return (
        <div className="container-xl flex flex-col">
            <div className="container-xl flex flex-row justify-between">
                <div
                    className="flex flex-row justify-end items-center bg-no-repeat rounded-lg h-[150px] w-[305px] bg-[#078752] mb-[10px]"
                    style={{backgroundImage: `url(${phoneImage})`}}>
                    <a href="#" className="p-[20px] pr-[15px] text-white text-lg font-black">Смартфони</a>
                </div>
                <div
                    className="flex flex-row justify-end items-center bg-no-repeat rounded-lg h-[150px] w-[305px] bg-[#0096ff] mb-[10px]"
                    style={{backgroundImage: `url(${heaterImage})`}}>
                    <a href="#" className="p-[20px] pr-[15px] text-white text-lg font-black">Обогреватели</a>
                </div>
                <div
                    className="flex flex-row justify-center items-end bg-no-repeat rounded-lg h-[150px] w-[305px] bg-[#d7e9f7] mb-[10px]"
                    style={{backgroundImage: `url(${kitchenAppleancesImage})`}}>
                    <a href="#" className="p-[20px] pr-[15px] text-white text-lg font-black">Техника для кухни</a>
                </div>
                <div className="flex flex-row justify-start items-center bg-no-repeat rounded-lg h-[150px] w-[305px] bg-[#3f57b7] mb-[10px]"
                    style={{backgroundImage: `url(${householdAppleancesImage})`}}>
                    <a href="#" className="p-[20px] pr-[15px] text-white text-lg font-black">Бытовая<br/>Техника</a>
                </div>
               </div>
            <div className="container-xl flex flex-row justify-between">
                <div
                    className="flex flex-row justify-end items-center bg-no-repeat rounded-lg h-[150px] w-[305px] bg-[#e41f38] mb-[10px]"
                    style={{backgroundImage: `url(${gamingImage})`}}>
                    <a href="#" className="p-[20px] pr-[15px] text-white text-lg font-black">Gaming</a>
                </div>
                <div
                    className="flex flex-row justify-start items-center bg-no-repeat rounded-lg h-[150px] w-[305px] bg-[#d7e9f7] mb-[10px]"
                    style={{backgroundImage: `url(${autoImage})`}}>
                    <a href="#" className="p-[20px] pr-[15px] text-white text-lg font-black">Авто товары</a>
                </div>
                <div
                    className="flex flex-row justify-start items-center bg-no-repeat rounded-lg h-[150px] w-[305px] bg-[#ff9100] mb-[10px]"
                    style={{backgroundImage: `url(${laptopImage})`}}>
                    <a href="#" className="p-[20px] pr-[15px] text-white text-lg font-black">Ноутбуки</a>
                </div>
                <div
                    className="flex flex-row justify-start items-center bg-no-repeat rounded-lg h-[150px] w-[305px] bg-[#0096ff] mb-[10px]"
                    style={{backgroundImage: `url(${tvImage})`}}>
                    <a href="#" className="p-[20px] pr-[15px] text-white text-lg font-black">TV AUDIO</a>
                </div>

            </div>
        </div>
    );
}