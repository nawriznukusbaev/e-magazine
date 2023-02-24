import {useGetUsersQuery} from "../../store/slices/UserSlice";
import {style} from "../modal_style";
export const Profile = () =>{
    const {users:data} = useGetUsersQuery();

    return (<Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={style}
        noValidate
        autoComplete="off"
    >

    </Box>);
}