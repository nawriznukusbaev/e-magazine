import { createSlice } from '@reduxjs/toolkit';

const initialState = {
        exp:0,
        sub:'',
        is_admin:false
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        addData:(state, action) => {
            const {sub,exp,is_admin}=action.payload
                 state.exp=exp
                 state.sub=sub
                 state.is_admin=is_admin
        }

    }
});

export const {addData} = loginSlice.actions;
export default loginSlice.reducer;