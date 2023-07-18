import styled from "styled-components";

export const Div = styled.main`
    height: ${(prop)=> prop.loading === true ? "100vh" : "none" };
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding-bottom: 10vh;
    h1{
        padding-bottom: 4vh;
    }

    .container{
        border-radius: 5px;
        width: 90vw;
        max-width: 550px;
        padding: 20px ;
        display: flex;
        gap: 10px;
        flex-direction: column;
        border: 2px solid black;
    }

    .container h2, p{
        color: #9E30F4;
    }
    .container h2 b{
        color: black;
    }
    .container p b{
        color: black;
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
    }
    .container .options a{
        text-decoration: none;
        color: #9E30F4;
        font-weight: bold;
    }
`

