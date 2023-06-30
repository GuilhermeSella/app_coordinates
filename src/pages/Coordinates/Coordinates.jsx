import React, { useState, useContext } from 'react';
import { Div } from '../../components/Coordinates/Coordinates.style';
import { QueryContext } from '../../contexts/Query';
import googleapi from './googleapi.svg'

function Coordinates(props) {

    const [adress, setAdress] = useState('');
    const [lat, setLat] = useState('');
    const [lng , setLng] = useState('');

    const {getCoordinates, src, loading} = useContext(QueryContext)

    async function handleSubmit(e){
        
        e.preventDefault();
        let coordenadas =  await getCoordinates(adress)
        setLat(coordenadas.lat)
        setLng(coordenadas.lng)

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
                src={src}
                frameBorder="0">
                </iframe>
             
            </div>
       </Div>
    );
}

export default Coordinates;