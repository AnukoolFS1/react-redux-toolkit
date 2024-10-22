import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numOfCakes: 20
}

const cakeSlice = createSlice({
    name: "cakes",
    initialState,
    reducers: {
        order: (state, action) => {
            if (action.payload) {
                state.numOfCakes -= action.payload
            } else {
                state.numOfCakes--
            }
        },
        restock: (state, action) => {
           if(action.payload) state.numOfCakes += action.payload
           else state.numOfCakes += 10
        }
    }
});

export default cakeSlice.reducer;
export const { order, restock } = cakeSlice.actions