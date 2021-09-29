import IRepository from "../../data/IRepository";
import APIRepositoriesService from "../../services/APIRepositoriesService";
import RepositoriesCard from "../cards/RepositoriesCard";

export default function RepositoriesSection({repositories,setRepositories} : {repositories:IRepository[],setRepositories:(repositories: IRepository[]) => void}) {
    return (
        <div>
            <h1>Top Repositories</h1>
            <APIRepositoriesService setRepositories={setRepositories}/>
            <RepositoriesCard repositories={repositories}/>
        </div>
      );
}