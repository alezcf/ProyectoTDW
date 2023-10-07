import { useQuery } from "react-query";
import axios from "axios";

export function useBuscarInfoQuery(params) {
    return useQuery(["buscarInfoQuery", params], buscarInfoQuery, {
        retry: 0,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        keepPreviousData: false,
        enabled: true,
    });
}

    export const buscarInfoQuery = async (params) => {
    console.log("params original", params);
    console.log("params detalle ", params.queryKey);

    //const [queryName, paramsFilter] = params.queryKey;
    
    let url = `https://dog.ceo/api/breeds/list/all`;
    
    const { data } = await axios.get(url);
    
    let dogs;
    // Aquí accedemos directamente a la propiedad "message" que contiene la lista de razas
    dogs = Object.keys(data.message).map((breed, index) => {
        return { label: breed, id: index + 1 };
    });

    return dogs;
};
