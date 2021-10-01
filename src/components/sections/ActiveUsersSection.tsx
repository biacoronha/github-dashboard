import IUser from "../../helpers/IUser";
import UseFetch from "../../helpers/UseFetch";
import UsersCard from "../cards/UsersCard";
import * as Constants from "../../helpers/Constants";
import './Sections.css'

export default function ActiveUsersSection({activeUsers,setActiveUsers,search} : {activeUsers:IUser[],setActiveUsers:(activeUsers: IUser[]) => void, search:any}) {
    const searchQuery = `+${search}+${Constants.SEARCH_TERM.FOR_USERS}`;
    const query = Constants.ENTITY.USER + Constants.QUERY.ACTIVE_USERS + searchQuery + Constants.PAGINATION.FOR_USERS;

    setActiveUsers(UseFetch(query));
    
    return (
        <div>
            <h1>Most Active Users</h1>
            <div className="section"> 
                {activeUsers?.map((user, i) => 
                    <UsersCard user={user} key={i}/> )}
            </div>
        </div>
      );

}