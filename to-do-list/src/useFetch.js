import { useState, useEffect } from "react";

const useFetch = (URL) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(URL)
            .then((response) => {
                if (!response.ok) {
                    throw Error('Could not get data');
                }
                return response.json();
            })
            .then((data) => {
                // console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                setIsPending(false);
                setError(err.message);
            })
        return () => {
            console.log('testtest')
            console.log(data)
        }
    }, [URL]);

    return {
        data,
        isPending,
        error,
    }
}
 
export default useFetch;
