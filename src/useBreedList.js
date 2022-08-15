import { useState, useEffect } from "react";

const localChache = {};

export default function useBreedList(animal) {
    const [breedList,setBreedList] = useState([]);
    const [status,setStatus] = useState("unloaded");

    useEffect(() => {
        (!animal)? setBreedList([]) 
        : (localChache[animal])? setBreedList(localChache[animal]) 
        : requestBreedList();

        async function requestBreedList(){
            setBreedList([]);
            setStatus("loading");

            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            )
            const json = await res.json();
            localChache[animal] = json.breeds || [];
            setBreedList(localChache[animal]);
            setStatus("loaded");
        }
    },[animal])

    return [breedList,status];
    
}