import { createContext, useState } from "react";

export const QueryContext = createContext();
import googleapi from './googleapi.svg'
const Queryprovider = ({children}) =>{

    const [src, setSrc] = useState("")
    const [loading, setLoading] = useState(false);

    //API KEY : AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8
    var apiKey = 'AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8'
    //GET LAT,LNG : https://maps.googleapis.com/maps/api/geocode/json?address=${}&key=AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8

    //GET MAP :  https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&format=png&zoom=16&size=400x400&markers=color:blue%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8

    async function getCoordinates(adress){
        setLoading(true)
        let c;
        await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${adress}&key=AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8`)
        .then((res)=>res.json())
        .then((data)=> c = data.results[0].geometry.location)
        getMap(c);
         return c;
         
         

    }

    async function getMap(coordinates){
        
        let lat = coordinates.lat
        let lng = coordinates.lng
        setSrc ( `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&format=png&zoom=16&size=400x400&key=AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8 `)

        setLoading(false)
        
    }


    return(
        <QueryContext.Provider value={{getCoordinates, src, loading}} >
            {children}
        </QueryContext.Provider>
    )

}

export default Queryprovider;