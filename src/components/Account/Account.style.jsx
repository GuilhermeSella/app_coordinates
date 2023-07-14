import styled from "styled-components";


export const Main = styled.main`
  background-color: ${(prop) => prop.theme === "light" ? "white" : "#0a0a0aea"};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6vh 0vh 25vh 0vh;
`

export const Profilepic = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    overflow: hidden;

    label{
        width: 250px;
        height: 230px;
        display: flex;
        flex-direction: column-reverse;
        
        justify-content: space-between;
        cursor: pointer;
        align-items: center;
    }

     img{
        width:250px;
        border-radius: 50%;
        height:230px;
       
     }
     label input{
      display: none;
       
     }
     span{
        color: #9E30F4;
        font-weight: bold;
        text-decoration: underline;
        top: 20px;
        position: relative;
        transition: 0.9s;
     }
     label:hover span{
        transform: scale(1.1);
     }
`
export const FormProfile = styled.div`
  
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 100%;

    h1{
        text-align: center;
        font-size: 1.7rem;
        color: #9E30F4;
    }

    div{
        width: 90%;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    div label{
        color: #9E30F4;
        font-weight: bold;
        font-size: 18px;
        pointer-events: none;
    }


    div input{
        padding: 10px;
        background-color: transparent;
        color:  ${(prop)=>prop.theme === "dark" ? "white" : "black"} ;
        font-size: 1.1rem;
        outline: none;
        border: none;
        border-bottom: 1px solid #9E30F4;
      
    }

   

    .divToggleTheme{
        padding: 20px 0 70px 0  ;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
       
    }
    .toggleTheme{
        cursor: pointer;
        padding: 15px 30px;
        font-size: 1.1rem;
        border-radius: 12px;
        border: none;
        background-color: ${(prop)=>prop.theme === "light" ? "#0a0a0aea" : "rgba(195, 171, 255, 0.919)"};
        color:  white ;
    }

    .saveButton{
        cursor: pointer;
        padding: 15px 50px;
        border-radius: 10px;
        font-weight: bold;
        background-color: #9E30F4;
        color: white;
        border: none;
        font-size: 1.2rem;
    }

    .delete{
        color: red;
    }
`
