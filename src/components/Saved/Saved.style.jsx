import styled from "styled-components";

export const Div = styled.main`
    height: ${(prop)=> prop.loading === true ? "100vh" : "1" };
    width: 100%;
    background-color: ${(prop)=>prop.theme === "light" ? "white" : "#0a0a0aea"};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding-bottom: 40vh;
    padding-top: 5vh;
    color: ${(prop)=>prop.theme === "light" ? "black" : "white"};

    h1{
        padding-bottom: 4vh;
       
    }
    h1 b{
        color: #9E30F4;
    }

    .container{
        border-radius: 5px;
        width: 90vw;
        max-width: 550px;
        padding: 20px ;
        display: flex;
        gap: 10px;
        flex-direction: column;
        border: 2px solid  ${(prop)=>prop.theme === "light" ? "black" : "white"};;
       
    }

    .container h2, p{
        color: #9E30F4;
    }
    .container h2 b{
        color: ${(prop)=>prop.theme === "light" ? "black" : "white"};
    }
    .container p b{
        color: ${(prop)=>prop.theme === "light" ? "black" : "white"};
    }

    .container .options{
        display: flex;
        align-items: center;
        padding: 10px 0px;
        gap: 30px;
    }
    .container .options button{
       color: #9E30F4;
        cursor: pointer;
        background: transparent;
        font-weight: bold;
        border: none;
        border-radius: 7px;
        font-size: 1rem;
        text-decoration: underline;
    }
    .container .options a{
        color: #9E30F4;
        font-weight: bold;
    }
`

export const DivnotFound = styled.div`
    display:flex ;
    flex-direction: column;
    align-items: center;
    padding: 20vh 0;
    text-align: center;
    img{
        width: 90vw;
        
        max-width: 400px;
    }

    h1{

    }
    a{
        color: #9E30F4;
        font-weight: bold;
    }
`

