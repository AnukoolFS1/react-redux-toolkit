import {createSlice} from '@reduxjs/toolkit'
import {order as CakeOrder} from './cakeSlice'


const initialState = {
    numOfIceCream: 50
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
           if(action.payload) state.numOfIceCream += action.payload
           else state.numOfIceCream += 20
        }
    },
    extraReducers: (builder) => {
        builder.addCase(CakeOrder, (state) => {
            state.numOfIceCream--
        })
    }
});

export default icecreamSlice.reducer;
export const { order, restock } = icecreamSlice.actions;