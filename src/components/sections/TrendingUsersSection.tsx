import IUser from "../../helpers/IUser";
import UseFetch from "../../helpers/UseFetch";
import UsersCard from "../cards/UsersCard";
import * as Constants from "../../helpers/Constants";

export default function TrendingUsersSection({trendingUsers,setTrendingUsers, search} : {trendingUsers:IUser[],setTrendingUsers:(trendingUsers: IUser[]) => void, search:any}) {
    const searchQuery = `+${search}+${Constants.SEARCH_TERM.FOR_USERS}`;
    const query = Constants.ENTITY.USER + Constants.QUERY.TRENDING_USERS + searchQuery + Constants.PAGINATION.FOR_USERS;

    setTrendingUsers(UseFetch(query));

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