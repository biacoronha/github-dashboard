import { Grid } from "@material-ui/core";
import IUser from "../../data/IUser";
import APIUsersService from "../../services/APIUsersService";
import UsersCard from "../cards/UsersCard";
import './Sections.css'

export default function ActiveUsersSection({users,setUsers} : {users:IUser[],setUsers:(users: IUser[]) => void}) {
    const query = "created:>2021-06-28+sort:repositories+type:user&page=1&per_page=3"; 
    console.log(users)
    return (
        <div>
            <h1>Most Active Users</h1>
            <APIUsersService setUsers={setUsers} query={query}/>
            {/* <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            > */}
            {users?.map((user, i) => 
                <UsersCard user={user} key={i}/> )}
            {/* </Grid> */}
        </div>
      );

}