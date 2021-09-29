import IUser from "../../helpers/IUser";
import UseFetch from "../../helpers/UseFetch";
import UsersCard from "../cards/UsersCard";

export default function TrendingUsersSection({trendingUsers,setTrendingUsers} : {trendingUsers:IUser[],setTrendingUsers:(trendingUsers: IUser[]) => void}) {
    //const query = "created:>2021-06-28+sort:followers+type:user&page=1&per_page=3";
    const url = "https://api.github.com/search/users?q=created:>2021-06-28+sort:followers+type:user&page=1&per_page=3"; 

    setTrendingUsers(UseFetch(url));
    console.log(trendingUsers)
    return (
        <div>
            <h1>Trendings Users</h1>
            {/* <APIUsersService setUsers={setUsers} query={query}/> */}
            {trendingUsers?.map((user, i) => 
                <UsersCard user={user} key={i}/> )}
        </div>
      );
}