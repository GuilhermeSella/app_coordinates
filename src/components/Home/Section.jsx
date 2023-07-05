import React from 'react';
import styled from 'styled-components';
import armazenamento from './imgs/armazenamento.svg'
import googleapi from './imgs/googleapi.svg'
import geolocalizacao from './imgs/geolocalizacao.svg'
const Div = styled.section`
    width: 100%;
   
    background-color: #101010ed;
    display: flex;
    justify-content: space-evenly;
    
    gap: 20px;
    align-items: center;
    padding:  200px 10px;
    flex-wrap: wrap;
`

const Card = styled.div`
    width:80vw ;
    max-width: 350px;
    height: 50vh;
    background-color: white;
    border-radius: 15px;
    padding: 35px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width: 100%;
        height: 70%;
    }

    p{
       
        font-size: 1.2rem;
        
    }
`



function Section() {
    return (
      <Div>
        <Card>
            <img src={armazenamento} alt="" />
            <h2>Armazenamento</h2>
            <p>Armazene os seus endereços e suas coordenadas para acessar quando quiser.</p>
        </Card>
        <Card>
            <img src={geolocalizacao} alt="" />
            <h2>Geolocalização</h2>
            <p>Tenha em mãos as exatas coordenadas geográficas que você procura</p>
        </Card>
        <Card>
            <img src={googleapi} alt="" />
            <h2>Google API</h2>
            <p>Esse projeto utiliza Google API
            para fornecer a geolocalização
            que você deseja.</p>
        </Card>
      </Div>
    );
}

export default Section;