import { useSelector } from "react-redux"

const IceCreamView = () => {
    const noOfIceCreams = useSelector((state) => state.icecream.numOfIceCream)


    return (
        <div>
            <h1>IceCream: {noOfIceCreams}</h1>
            <button>Order IceCream</button>
            <button>Restock IceCream</button>
        </div>
    )
}

export default IceCreamView