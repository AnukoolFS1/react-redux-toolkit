import {createSlice} from '@reduxjs/toolkit'
import { order as cakeOrder } from './cakeSlice'


const initialState = {
    numOfIceCream: 20
}

const icecreamSlice = createSlice({
    name: "ice cream",
    initialState,
    reducers: {
        order: (state, action) => {
            if (action.payload) {
                state.numOfIceCream -= action.payload
            } else {
                state.numOfIceCream--
            }
        },
        restock: (state, action) => {
            state.numOfIceCream += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrder, (state) => {
            state.numOfIceCream--
        })
    }
});

export default icecreamSlice.reducer;
export const { order, restock } = icecreamSlice.actions;