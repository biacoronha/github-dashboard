import IRepository from "../../helpers/IRepository";
import UseFetch from "../../helpers/UseFetch";
import RepositoriesCard from "../cards/RepositoriesCard";
import * as Constants from "../../helpers/Constants";

export default function RepositoriesSection({repositories,setRepositories, search} : {repositories:IRepository[],setRepositories:(repositories: IRepository[]) => void, search:any}) {
    const searchQuery = `+${search}+${Constants.SEARCH_TERM.FOR_REPOSITORIES}`;
    const query = Constants.ENTITY.REPOSITORY + Constants.QUERY.REPOSITORIES + searchQuery + Constants.PAGINATION.FOR_REPOSITORIES;

    const repos = UseFetch(query)

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