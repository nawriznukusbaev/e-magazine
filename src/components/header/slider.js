import {useState} from "react";

export const Slider = (data) => {
    const [count, setCount] = useState(0);
    var arr = '';
    let countSlider = 0;
    console.log(data);

    if (data !== undefined) {
        arr = [...data.data];
    }

    /*arr.map(item => {
        countSlider++;
    })
    let timer = setInterval(() => {
            if (countSlider !== count + 1) {
                setCount(count + 1)
            } else setCount(0);
        }
        , 3000);
*/

    const setSlider = (index) => {
        setCount(index);
        console.log(count);
    }
    let bgColor = arr[count].color;
    console.log(bgColor);
    return (
        <>
            <div className={`w-full bg-[${bgColor}] `}>
                <div className="container-xl mx-auto">
                    <div className="flex flex-row mb-[15px]">
                        <div
                            className={`flex flex-row justify-center duration-300 h-[450px] w-[100%] bg-[${'bgColor'}]`}>
                            <a href="#">
                                <img alt="banner.jpg" className="w-[100%] duration-300 h-[450px]"
                                     src={`${arr[count].img}`}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center mb-[15px]">
                {
                    arr.map((item, index) => {
                        return (
                            <button key={item}
                                    className={`w-[16px] h-[16px] mr-[5px] ${index === count ? 'bg-[red]' : 'bg-gray-300'} duration-150 cursor-pointer rounded-lg`}
                                    onClick={() => {
                                        setSlider(index);
                                       /* clearInterval(timer);
                                        timer();*/
                                    }}>

                            </button>
                        )
                    })}
            </div>
        </>
    )
}