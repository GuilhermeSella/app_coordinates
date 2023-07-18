import React, { useEffect, useState } from 'react';
import { Div } from '../../components/Saved/Saved.style';
import { doc, onSnapshot, collection, query, where, limit } from 'firebase/firestore';
import { db } from '../../services/Firebase-connection';
import { useContext } from 'react';
import {ThemeContext} from '../../contexts/Theme'

function Saved(props) {

    const {theme} = useContext(ThemeContext)
    const [limit, setLimit] = useState(5)
    const [loading, setLoading] = useState(true)
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
                setLoading(false)
            })
        }

        LoadCoordinates()

    }, [])


    return (
        <>
      
            <Div loading = {loading} theme={theme}>
            <h1>Página Salvos</h1>
           {loading === true ? (
               <h2>Buscando Dados...</h2>
           ) : listCoordinates.map((item)=>(
               <div className='container' key={item.id}>
                   <h2>Adress: <b>{item.adress}</b></h2>
                   <p>Latitude: <b>{item.lat}</b></p>
                   <p>Longitude: <b>{item.lng}</b></p>
                   <div className='options'>
                       <button>Excluir</button>
                        <a href="">Mapa</a>
                   </div>
               </div>

           ))}
       </Div>
        </>
    );
}

export default Saved;