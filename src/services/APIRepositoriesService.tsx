import IUser from "../data/IUser";
import axios from 'axios';
import { useEffect, useState } from 'react';
import IRepository from "../data/IRepository";

function APIRepositoriesService(props: {setRepositories:(repositories: IRepository[]) => void, query:string}) {
    const {setRepositories, query} = props;
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
    const [error, setError]: [string, (error: string) => void] = useState("");

    useEffect(() => {
    axios
        .get<IRepository[]>("https://api.github.com/search/repositories?q="+query, {timeout : 6000})
        .then(response => {
        setRepositories(response.data);
        setLoading(false);
        })
        .catch(ex => {
        const error =
        ex.code === "ECONNABORTED"
        ? "A timeout has occurred"
        : ex.response.status === 404
            ? "Resource Not found"
            : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
        });
    }, []);

    return (
        <div>

        </div>
    );

}

export default APIRepositoriesService;
