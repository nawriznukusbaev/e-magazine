import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: false,
};

const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        auth: (state, action) => {
            state.value = action.payload;
        },

    },
});

export const { auth } = authSlice.actions;
export default authSlice.reducer;