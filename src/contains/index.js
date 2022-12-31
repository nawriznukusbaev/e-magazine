import {useSelector} from "react-redux";
import {increase} from "../store";

export const mapToDispatch=(dispatch)=>{
    dispatch(increase())

}