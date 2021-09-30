import IRepository from "../../helpers/IRepository";
import UseFetch from "../../helpers/UseFetch";
import RepositoriesCard from "../cards/RepositoriesCard";

export default function RepositoriesSection({repositories,setRepositories} : {repositories:IRepository[],setRepositories:(repositories: IRepository[]) => void}) {
    //const query = "created:%3E2020-09-29+sort:stars+type:repositories&page=1&per_page=4"; 
    const url = "https://api.github.com/search/repositories?q=created:%3E2020-09-29+sort:stars+type:repositories&page=1&per_page=4"; 

    const repos = UseFetch(url)

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