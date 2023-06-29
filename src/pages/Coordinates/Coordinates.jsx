import React, { useState, useContext } from 'react';
import { Div } from '../../components/Coordinates/Coordinates.style';
import { QueryContext } from '../../contexts/Query';
import googleapi from './googleapi.svg'

function Coordinates(props) {

    const [adress, setAdress] = useState('');
    const [lat, setLat] = useState();
    const [lng , setLng] = useState();

    const {getCoordinates} = useContext(QueryContext)

    function handleSubmit(e){
        let coordenadas = getCoordinates(adress)
    }

    return (
       <Div>
            <div className='formulario'>
                <h1>Preencha o formulário a seguir</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">Digite um endereço:</label>
                        <input type="text" name="" id="" onChange={(e)=>setAdress(e.target.value)}  />
                    </div>
                    <div>
                        <label htmlFor="">Digite um endereço:</label>
                        <input type="text" name="" id=""  />
                    </div>

                    <div className='divCoordenada'>
                        <div>
                            <label htmlFor="">Latitude</label>
                            <input type="text" name="" readOnly className='readOnly' id="" />
                        </div>
                        <div>
                            <label htmlFor="">Longitude</label>
                            <input type="text" name="" readOnly className='readOnly' id="" />
                        </div>
                    </div>
                    <button type='submit'>Buscar</button>
                </form>
            </div>
            <div>
                <img className='img' src={googleapi} alt="" />
            </div>
       </Div>
    );
}

export default Coordinates;