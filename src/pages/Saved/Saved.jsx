import React, { useEffect, useState } from 'react';
import { Div, DivnotFound } from '../../components/Saved/Saved.style';
import { doc, onSnapshot, collection, query, where, limit } from 'firebase/firestore';
import { db } from '../../services/Firebase-connection';
import { useContext } from 'react';
import {ThemeContext} from '../../contexts/Theme'
import imgnotfound from './imgnotfound.png'

function Saved(props) {

    const {theme} = useContext(ThemeContext)
    const [limit, setLimit] = useState(5)
    const [notFound, setNotFound] = useState(false)
    const [loading, setLoading] = useState(true)
    const [listCoordinates, setListCordinates] = useState([])
    

    async function deleteCoordinates(Id){
        
    }

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
                if(list.length == 0){
                    setNotFound(true)
                }else{
                    setNotFound(false)
                }
                setLoading(false)
            })
        }

        LoadCoordinates()

    }, [])

  


    return (
        <>
      
            <Div loading = {loading} theme={theme}>
            <h1>Página <b>Salvos</b></h1>
           {loading === true ? (
               <h2>Buscando Dados...</h2>
           ) : notFound === true ? (
                <DivnotFound >
                    <h1 >Nenhum registro encontrado!</h1>
                    
                    <a href="/coordinates">Começar</a>
                    
                </DivnotFound>
           ) : listCoordinates.map((item)=>(
            <div className='container' key={item.id}>
                <h2>Adress: <b>{item.adress}</b></h2>
                <p>Latitude: <b>{item.lat}</b></p>
                <p>Longitude: <b>{item.lng}</b></p>
                <div className='options'>
                    <button onClick={deleteCoordinates(item.id)}>Excluir</button>
                     <a target='_blank' href={`https://www.google.com/maps/search/?api=1&query=${item.lat}%2C${item.lng}`}>Maps</a>
                </div>
            </div>

        ))}
       </Div>
        </>
    );
}

export default Saved;