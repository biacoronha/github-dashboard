import IUser from "../../data/IUser";
import APIUsersService from "../../services/APIUsersService";
import UsersCard from "../cards/UsersCard";

export default function TrendingUsersSection({users,setUsers} : {users:IUser[],setUsers:(users: IUser[]) => void}) {
    const query = "created:>2021-06-28+sort:followers+type:user&page=1&per_page=3"; 
    return (
        <div>
            <h1>Trendings Users</h1>
            <APIUsersService setUsers={setUsers} query={query}/>
            <UsersCard users={users}/>
        </div>
      );
}