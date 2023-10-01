import axios from "axios";
import { useState } from "react";

export const useFetchingData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getDataWithFetchAPI = async (url: string) => {
        setIsLoading(true);
        try {
            const request = await fetch(url);
            const response = await request.json();
            if (!request.ok) {
                throw new Error(response.message || "Something went wrong!");
            }
            setData(response);
        } catch (error) {
            console.log(error);
            setData([]);
        }
        setIsLoading(false);
    }
    const getDataWithAxios = async (url: string, query?: any) => {
        setIsLoading(true);
        try {
            const { data: requestData } = await axios.get(url, { params: query });
            setData(requestData);
        } catch (error) {
            console.log(error);            
            setData([]);     
        }
        setIsLoading(false);
    }


    return {
        data,
        isLoading,

        // getData: getDataWithAxios,
        getData: getDataWithFetchAPI,
    };
}
