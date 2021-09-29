import IUser from "../../data/IUser";
import APIUsersService from "../../services/APIUsersService";
import UsersCard from "../cards/UsersCard";
import './Sections.css'

export default function ActiveUsersSection({users,setUsers} : {users:IUser[],setUsers:(users: IUser[]) => void}) {
    return (
        <div>
            <h1>Most Active Users</h1>
            <APIUsersService setUsers={setUsers}/>
            <UsersCard users={users} />
        </div>
      );

}