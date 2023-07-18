import React, { useEffect, useState } from 'react';
import { Div, DivnotFound } from '../../components/Saved/Saved.style';
import {Link } from 'react-router-dom'
import { doc, onSnapshot, collection, query, where, limit, deleteDoc } from 'firebase/firestore';
import { db } from '../../services/Firebase-connection';
import { useContext } from 'react';
import {ThemeContext} from '../../contexts/Theme'


function Saved(props) {

    const {theme} = useContext(ThemeContext)
    const [limit, setLimit] = useState(5)
    const [notFound, setNotFound] = useState(false)
    const [loading, setLoading] = useState(true)
    const [listCoordinates, setListCordinates] = useState([])
    

    async function deleteCoordinates(Id){
        const docRef = doc(db, "coordinates", Id)
        await deleteDoc(docRef)
        .then(()=>{
            alert("oK")
        })
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
                    <h1 >Você não possui nenhum registro!</h1>    
                    <Link to="/home/coordinates">Começar</Link>
                </DivnotFound>
           ) : listCoordinates.map((item)=>(
            <div className='container' key={item.id}>
                <h2>Adress: <b>{item.adress}</b></h2>
                <p>Latitude: <b>{item.lat}</b></p>
                <p>Longitude: <b>{item.lng}</b></p>
                <div className='options'>
                    <button onClick={()=> deleteCoordinates(item.id)}>Excluir</button>
                     <a target='_blank' href={`https://www.google.com/maps/search/?api=1&query=${item.lat}%2C${item.lng}`}>Maps</a>
                </div>
            </div>

        ))}
       </Div>
        </>
    );
}

export default Saved;