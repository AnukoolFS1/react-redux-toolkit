import { useSelector, useDispatch } from "react-redux";
import {order , restock} from './cakeSlice'



const CakeView = () => {
    const noOfCakes = useSelector((state) => state.cake.numOfCakes)
    const dispatch = useDispatch()


    return (
        <div>
            <h1>Cake: {noOfCakes}</h1>
            <button onClick={() => dispatch(order())}>Order Cake</button>
            <button onClick={() => dispatch(restock())}>Restock Cake</button>
        </div>
    )
}

export default CakeView