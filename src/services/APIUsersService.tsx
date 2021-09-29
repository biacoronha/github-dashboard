import IUser from "../data/IUser";
import axios from 'axios';
import { useEffect, useState } from 'react';

function APIUsersService({setUsers}:{setUsers:(users: IUser[]) => void}) {
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
    const [error, setError]: [string, (error: string) => void] = useState("");

    useEffect(() => {
    axios
        .get<IUser[]>("https://jsonplaceholder.typicode.com/posts", {timeout : 6000})
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
