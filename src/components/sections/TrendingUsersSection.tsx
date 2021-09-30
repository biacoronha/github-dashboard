import IUser from "../../helpers/IUser";
import UseFetch from "../../helpers/UseFetch";
import UsersCard from "../cards/UsersCard";

export default function TrendingUsersSection({trendingUsers,setTrendingUsers, search} : {trendingUsers:IUser[],setTrendingUsers:(trendingUsers: IUser[]) => void, search:any}) {
    const baseUrl = "https://api.github.com/search/";
    const entity = "users";
    const query = "?q=created:>2021-06-28+sort:followers+type:user"; 
    const searchQuery = `+${search}+in:login`;
    const filter = "&page=1&per_page=3";


    setTrendingUsers(UseFetch(baseUrl+entity+query+searchQuery+filter));

    return (
        <div>
            <h1>Trendings Users</h1>
            <div className="section"> 
                {trendingUsers?.map((user, i) => 
                    <UsersCard user={user} key={i}/> )}
            </div>
        </div>
      );
}