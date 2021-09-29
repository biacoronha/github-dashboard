import IUser from "../data/IUser";
import axios from 'axios';
import { useEffect, useState } from 'react';

function APIUsersService(props: {setUsers:(users: IUser[]) => void, query:string}) {
    const {setUsers, query} = props;
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
    const [error, setError]: [string, (error: string) => void] = useState("");

    useEffect(() => {
    axios
        .get<IUser[]>("https://api.github.com/search/users?q="+query, {timeout : 6000})
        .then(response => {
        setUsers(response.data);
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

export default APIUsersService;
