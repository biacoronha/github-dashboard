import IUser from "../../helpers/IUser";
import UseFetch from "../../helpers/UseFetch";
import UsersCard from "../cards/UsersCard";
import './Sections.css'

export default function ActiveUsersSection({activeUsers,setActiveUsers} : {activeUsers:IUser[],setActiveUsers:(activeUsers: IUser[]) => void}) {
    //const query = "created:>2021-06-28+sort:repositories+type:user&page=1&per_page=3"; 
    const url = "https://api.github.com/search/users?q=created:>2021-06-28+sort:repositories+type:user&page=1&per_page=3"; 

    setActiveUsers(UseFetch(url));
    
    //console.log(activeUsers)

    return (
        <div>
            <h1>Most Active Users</h1>
            {/* <APIUsersService setUsers={setUsers} query={query}/> */}
            {/* <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            > */}
            {activeUsers?.map((user, i) => 
                //fazer as requisições aqui?
                <UsersCard user={user} key={i}/> )}
            {/* </Grid> */}
        </div>
      );

}