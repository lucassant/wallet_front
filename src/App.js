import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import AppProvider from "./AppContext/Provider";

export default function App(){
    return (
        <BrowserRouter>

        <ContainerApp>
            <AppProvider>
            <Routes>
            
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Signup/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/nova-entrada" element={<Income />}/>
            <Route path="/nova-saida" element={<Expense />}/>
            </Routes>

            </AppProvider>
        </ContainerApp>

        </BrowserRouter>
        
    )
}


const ContainerApp = styled.div`
width:100vw;
min-height: 100vh;
background-color: #8C11BE;
margin: 0px;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px;
padding: 0px;
font-family: 'Raleway', sans-serif;

`
