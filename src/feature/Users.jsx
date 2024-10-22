import { useSelector } from "react-redux"


const UsersView = () => {
    const users = useSelector(state => state.users.users)
    return (
        <div>
            <h1>Users List </h1>
        </div>
    )
}

export default UsersView