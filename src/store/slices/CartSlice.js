import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count:0,
    products: [],
    cartProducts:[]
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add:(state, action) => {
            const {name,id,quantity,price,images}=action.payload;
            if(state.products.find(item=>item.product_id===action.payload.id)===undefined){
                state.products.push({
                    name:name,
                    product_id:id,
                    quantity:1,
                    price:price,
                    image:images[0].image_path
                })
                state.cartProducts.push({
                    product_id:id,
                    quantity:1,
                    price:price
                })
                state.count+=1;
            } else {
                state.products.find(item=>item.product_id===action.payload.id).quantity+=1;
                state.cartProducts.find(item=>item.product_id===action.payload.id).quantity+=1;
                state.count+=1;
            }
        },
        remove: (state, action) => {
            state.count-=state.products.find(item=>item.product_id===action.payload.product_id).quantity;
            state.products.splice(action.payload.index,1);
            state.cartProducts.splice(action.payload.index,1);
        },
        increase: (state, action) => {
            state.products.find(item=>item.product_id===action.payload).quantity+=1;
            state.cartProducts.find(item=>item.product_id===action.payload).quantity+=1;
            state.count+=1;
        },
        decrease: (state, action) => {
            if(state.products.find(item=>item.product_id===action.payload).quantity>1){
                state.products.find(item=>item.product_id===action.payload).quantity-=1;
                state.cartProducts.find(item=>item.product_id===action.payload).quantity-=1;
                state.count-=1;
            }
        },



    }
});

export const { add,increase,decrease,remove } = cartSlice.actions;
export default cartSlice.reducer;