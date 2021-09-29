import axios from "axios";
import { useEffect, useState } from "react";
import IUser from "./IUser";

const UseFetch = (url:string) => {
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
    const [error, setError]: [string, (error: string) => void] = useState("");

    const [data, setData] = useState<any[]>([]);
    useEffect(() => {
        axios
        .get<any>(url, {timeout : 6000})
        .then(response => {
            setData(response.data.items);
            console.log(response.data.items)
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
      }, [url]);
    
    return data;
};

export default UseFetch;
