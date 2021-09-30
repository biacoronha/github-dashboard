import IRepository from "../../helpers/IRepository";
import UseFetch from "../../helpers/UseFetch";
import RepositoriesCard from "../cards/RepositoriesCard";

export default function RepositoriesSection({repositories,setRepositories, search} : {repositories:IRepository[],setRepositories:(repositories: IRepository[]) => void, search:any}) {
    const baseUrl = "https://api.github.com/search/";
    const entity = "repositories";
    const query = "?q=created:%3E2020-09-29+sort:stars+type:repositories"; 
    const searchQuery =`+${search}+in:full_name`;
    const filter = "&page=1&per_page=4";
    console.log(baseUrl+entity+query+searchQuery+filter)


    const repos = UseFetch(baseUrl+entity+query+searchQuery+filter)

    setRepositories(repos);
    return (
        <div>
            <h1>Top Repositories</h1>
            <div className="section"> 
                {repositories?.map((repository, i) => 
                    <RepositoriesCard repository={repository}/> )};
            </div>
        </div>
      );
}