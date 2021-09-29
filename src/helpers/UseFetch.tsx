import axios from "axios";
import { useEffect, useState } from "react";

export default function UseFetch(url:string)  {
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
    const [error, setError]: [string, (error: string) => void] = useState("");

    const [data, setData] = useState<any>();
    useEffect(() => {
        axios
        .get<any>(url, {timeout : 6000})
        .then(response => {
            console.log("teste")
            console.log(response.data)
            if(response.data.items) {
                console.log("tem")
                setData(response.data.items);
            } else{
                console.log("não tem")
                setData(response.data);
            }
            setLoading(false);
        })
        .catch(ex => {
            console.log("erro")
            console.log(ex.response)
        const error =
        // ex.code === "ECONNABORTED"
        // ? "A timeout has occurred"
        // : ex.response.status === 404
        //     ? "Resource Not found" :
             "An unexpected error has occurred";
        setError(error);
        setLoading(false);
        });
        //  return () => {data};
      }, [url]);

        console.log("no console")
        console.log(data)

        return data;
};