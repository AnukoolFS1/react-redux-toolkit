import { useSelector } from "react-redux"



const CakeView = () => {
    const noOfCakes = useSelector((state) => state.cake.numOfCakes)


    return (
        <div>
            <h1>Cake: {noOfCakes}</h1>
            <button>Order Cake</button>
            <button>Restock Cake</button>
        </div>
    )
}

export default CakeView