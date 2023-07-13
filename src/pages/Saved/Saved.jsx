import React, { useEffect, useState } from 'react';
import { Div } from '../../components/Saved/Saved.style';
import { doc, onSnapshot, collection, query, where, limit } from 'firebase/firestore';
import { db } from '../../services/Firebase-connection';


function Saved(props) {

    const [limit, setLimit] = useState(5)
    const [listCoordinates, setListCordinates] = useState([])
    
    useEffect(()=>{
        async function LoadCoordinates(){
            const obj = JSON.parse(localStorage.getItem("@userStorage"))
            const coordinatesReF = collection(db, "coordinates")
            const q = query(coordinatesReF, where("userId", "==", obj.uid))
            const unsub = onSnapshot(q, (snapshot)=>{
                let list = [];
                snapshot.forEach((item)=>{
                    list.push({
                        id:item.id,
                        adress:item.data().adress,
                        lat:item.data().lat,
                        lng:item.data().lng,
                        srcMap:item.data().srcMap
                    })
                })
                setListCordinates(list)
                
            })
        }

        LoadCoordinates()

    }, [])


    return (
        <Div>
            <h1>Página Save</h1>
            {listCoordinates.map((item)=>(
                <div key={item.id}>
                    <h2>{item.adress}</h2>
                    <p>Latitude: {item.lat}</p>
                    <p>Longitude: {item.lng}</p>
                     <br />
                </div>
            ))}
        </Div>
    );
}

export default Saved;