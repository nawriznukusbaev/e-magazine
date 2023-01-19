import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add:(state, action) => {
            if (state.value.find(item => item.id === action.payload.id) === undefined) {
                action.payload.count=1;
                return [...state.value, action.payload];
            } else {
                return state.value.map(item => {
                    if (item.id === action.id) {
                        item.count+=1;
                        console.log(item);
                        return item
                    }
                    else return item;
                });
            }
        },
        remove: (state, action) => {

        },
        increase: (state, action) => {

        },
        decrease: (state, action) => {

        },



    }
});

export const { add,increase,decrease,remove } = cartSlice.actions;
export default cartSlice.reducer;