import React, { useState, useContext } from 'react';
import { Div } from '../../components/Coordinates/Coordinates.style';
import { useQuery } from "react-query";
import ImgLoading from './Loading.svg'
import axios from 'axios'

export function Coordinates() {

    const [adress, setAdress] = useState('');
    const [lat, setLat] = useState('');
    const [lng , setLng] = useState('');
    const [src, setSrc] = useState("")
        
    //const {data, isFetching} = useQuery('getCor', fetchCoordinates);
        //API KEY : AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8
         //GET LAT,LNG : https://maps.googleapis.com/maps/api/geocode/json?address=${}&key=AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8
         //GET MAP :  https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&format=png&zoom=16&size=400x400&markers=color:blue%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8

        async function fetchCoordinates(adress){
            let ObjCoordenadas;
             axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${adress}&key=AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8`)
            .then((res)=>{
                console.log(res)
                // ObjCoordenadas = res.data.results[0].geometry.location;
                // setLat(ObjCoordenadas.lat)
                // setLng(ObjCoordenadas.lng)
                // getMap(adress)
            })
         }
        
        
        
        
    

    const getMap = async (adress) => setSrc(`https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8&q=${adress} `) 

    async function handleSubmit(e){
        
        e.preventDefault();
        fetchCoordinates(adress)

    }


    return (
       <Div>
            <div className='formulario'>
                
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">Digite um endereço:</label>
                        <input type="text" name="" id="" onChange={(e)=>setAdress(e.target.value)}  />
                    </div>
                

                    <div className='divCoordenada'>
                        <div>
                            <label htmlFor="">Latitude</label>
                            <input type="text" name="" value={lat} readOnly className='readOnly'/>
                        </div>
                        <div>
                            <label htmlFor="">Longitude</label>
                            <input type="text" name="" value={lng} readOnly className='readOnly'/>
                        </div>
                    </div>
                    <button type='submit'>Buscar</button>
                </form>
            </div>
            <div className='divImg'>
              
                <iframe 
                width="500"
                height="450"
                src={ImgLoading}
                frameBorder="0">
                </iframe>
             
            </div>
       </Div>
    );
}

