import IUser from "../../helpers/IUser";
import UseFetch from "../../helpers/UseFetch";
import UsersCard from "../cards/UsersCard";
import './Sections.css'

export default function ActiveUsersSection({activeUsers,setActiveUsers,search} : {activeUsers:IUser[],setActiveUsers:(activeUsers: IUser[]) => void, search:any}) {
    const baseUrl = "https://api.github.com/search/";
    const entity = "users";
    const query = "?q=created:>2021-06-28+sort:repositories+type:user"; 
    const searchQuery = `+${search}+in:login`;
    const filter = "&page=1&per_page=3";
    console.log(baseUrl+entity+query+searchQuery+filter)

    setActiveUsers(UseFetch(baseUrl+entity+query+searchQuery+filter));
    
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