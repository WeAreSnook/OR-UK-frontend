import { useEffect, useState } from "react";


//build in caching
const useOukapi = (urlParam) => {

    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [urlList, setUrl] = useState(urlParam);


    useEffect(() => {
        const fetchContent = async() => {
            setIsError(false);

        try {
            const result = Promise.all(urlList.map(url => fetch(url.url)
            .then(response => response.json())
            .then(data => ({ data, url }))
            .catch(error => { throw new Error("Process error") /* log { error, url}*/; } )
            ));
            setData(await result);
            setIsFetching(false);
        } catch(error) {
            //log-level("any errors? ", error);
            setIsError(true);
            setIsFetching(false);
        }
    }
        fetchContent();

    }, [urlList]);
    
    return[{data, isError, isFetching},  setUrl]
    };

    export default useOukapi; 