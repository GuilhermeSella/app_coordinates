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
                    {/* <div>
                        <label htmlFor="">Digite um endereço:</label>
                        <input type="text" name="" id=""  />
                    </div> */}

                    <div className='divCoordenada'>
                        <div>
                            <label htmlFor="">Latitude</label>
                            <input type="text" name="" value={lat} readOnly className='readOnly' id="" />
                        </div>
                        <div>
                            <label htmlFor="">Longitude</label>
                            <input type="text" name="" value={lng} readOnly className='readOnly' id="" />
                        </div>
                    </div>
                    <button type='submit'>Buscar</button>
                </form>
            </div>
            <div className='divImg'>
                {/* <img className='img' src={ loading === false ? src : googleapi} alt="" /> */}
                <iframe 
                width="500"
                height="450"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8&q=Avenida%20Paula%20Ferreira%20207%" frameBorder="0">

                </iframe>
                {/* <h2>{loading === false ? "" : "Carregando..."}</h2> */}
            </div>
       </Div>
    );
}

export default Coordinates;