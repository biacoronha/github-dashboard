import axios from "axios";
import { useEffect, useState } from "react";
import * as Constants from "../helpers/Constants";

export default function UseFetch(query:string)  {
    const ls = require('localstorage-ttl');

    const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
    const [error, setError]: [string, (error: string) => void] = useState("");
    const [data, setData] = useState<any>();

    const url = query.startsWith("http") ? query : Constants.BASE_URL + query;
   
    useEffect(() => {
        if(ls.get(url)) {
            setData(ls.get(url));
            return data;
        }

        axios
        .get<any>(url, {timeout : 6000})
        .then(response => {
            if(response.data.items) {
                setData(response.data.items);
                ls.set(url, response.data.items, 3600000);

            } else{
                setData(response.data);
                ls.set(url, response.data, 3600000);
            }

            setLoading(false);
        })
        .catch(ex => {
            console.log("erro")
        const error =
        ex.code === "ECONNABORTED"
        ? "A timeout has occurred"
        : ex.code === 403
            ? "Authentication expired, please try again later!" :
             "An unexpected error has occurred";
        setError(error);
        console.log(error)
        setLoading(false);
        });
        return error ? error : data;
      }, [url]);
      
        return data;
};