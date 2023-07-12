import React, { useEffect } from 'react';
import { Div } from '../../components/Saved/Saved.style';
import { doc, onSnapshot, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/Firebase-connection';


function Saved(props) {
    
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
                console.log(list)
            })
        }

        LoadCoordinates()

    }, [])


    return (
        <Div>
            <h1>Página Saved</h1>
        </Div>
    );
}

export default Saved;