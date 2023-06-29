import React from 'react';
import { Div } from '../../components/Coordinates/Coordinates.style';
import googleapi from './googleapi.svg'

function Coordinates(props) {
    return (
       <Div>
            <div className='formulario'>
                <h1>Preencha o formulário a seguir</h1>
                <form action="">
                    <div>
                        <label htmlFor="">Digite um endereço:</label>
                        <input type="text" name="" id=""  />
                    </div>
                    <div>
                        <label htmlFor="">Digite um endereço:</label>
                        <input type="text" name="" id=""  />
                    </div>
                    <div className='divCoordenada'>
                        <div>
                            <label htmlFor="">Latitude</label>
                            <input type="text" name="" readOnly id="" />
                        </div>
                        <div>
                            <label htmlFor="">Longitude</label>
                            <input type="text" name="" readOnly id="" />
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