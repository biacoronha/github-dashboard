import IUser from "../../data/IUser";
import APIUsersService from "../../services/APIUsersService";
import UsersCard from "../cards/UsersCard";

export default function TrendingUsersSection({users,setUsers} : {users:IUser[],setUsers:(users: IUser[]) => void}) {
    return (
        <div>
            <h1>Trendings Users</h1>
            <APIUsersService setUsers={setUsers}/>
            <UsersCard users={users}/>
        </div>
      );
}