import { createContext } from "react";

export const QueryContext = createContext();

const Queryprovider = ({children}) =>{

    //API KEY : AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8
    const apiKey = 'AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8'
    //GET LAT,LNG : https://maps.googleapis.com/maps/api/geocode/json?address=${}&key=AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8

    //GET MAP :  https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&format=png&zoom=16&size=400x400&markers=color:blue%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8

    async function getCoordinates(adress){
        await fetch(``)
    }



    return(
        <QueryContext.Provider value={{getCoordinates}} >
            {children}
        </QueryContext.Provider>
    )

}

export default Queryprovider;