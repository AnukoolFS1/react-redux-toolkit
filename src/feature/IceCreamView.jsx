import { useSelector, useDispatch } from "react-redux";
import { order, restock } from "./icecreamSlice";

const IceCreamView = () => {
    const noOfIceCreams = useSelector((state) => state.icecream.numOfIceCream);
    const dispatch = useDispatch()


    return (
        <div>
            <h1>IceCream: {noOfIceCreams}</h1>
            <button onClick={()=>dispatch(order())}>Order IceCream</button>
            <button onClick={()=>dispatch(restock())}>Restock IceCream</button>
        </div>
    )
}

export default IceCreamView