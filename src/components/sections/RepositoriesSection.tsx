import IRepository from "../../data/IRepository";
import APIRepositoriesService from "../../services/APIRepositoriesService";
import RepositoriesCard from "../cards/RepositoriesCard";

export default function RepositoriesSection({repositories,setRepositories} : {repositories:IRepository[],setRepositories:(repositories: IRepository[]) => void}) {
    const query = "created:%3E2020-09-29+sort:stars+type:repositories&page=1&per_page=4"; 

    return (
        <div>
            <h1>Top Repositories</h1>
            <APIRepositoriesService setRepositories={setRepositories} query={query}/>
            <RepositoriesCard repositories={repositories}/>
        </div>
      );
}