import slide1 from '../../img/1240x450_ru.webp'
import slide2 from '../../img/1240_450_ru_.webp';
import slide3 from '../../img/банер-для-сайта-версия-2.webp'
import {Slider} from "./slider";
export const HeaderBanner = () => {
    const slides=[
        {
            img:slide1,
            color:'#243c5a'
        },
        {
            img:slide2,
            color:'#014ffd'
        },
        {
            img:slide3,
            color:'black'
        }
    ];
    return (
        <Slider data={slides}/>
        )
}
