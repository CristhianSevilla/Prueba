import styled from "@emotion/styled"
import { useState } from "react"
import useAreaTexto from "../hooks/useAreaTexto"
import useSeleccionar from "../hooks/useSeleccionar"
import useCheckB from "../hooks/useCheckB"
import useRadioButt from "../hooks/useRadioButt"
import Error from "./Error"


const InputSubmit = styled.input`
background-color: #003daf;
border: none;
width: 100%;
padding: 1rem;
color: #fff;
font-weight: 700;
text-transform: uppercase;
font-size: 20px;
border-radius: .5rem;
margin-top: 30px;
transition: background-color .3s ease;
margin-bottom: 30px;

&:hover{
    background-color: #3b248b;
    cursor: pointer;
}
`

const Formul = styled.form `

    background-color: #d3d3d3;
    padding: 30px;
    border-radius: 10px;
    width: 70%;
    margin: 0 auto 30px auto; 
`

const Formulario = () => {

    //Selects
    const [select, Seleccionar1] = useSeleccionar('2.- Modern web browsers can read JSX directly');
    const [select2, Seleccionar2] = useSeleccionar('3.- In a web browser a JSX file needs to be transformed into a regular JavaScript object');
    const [select3, Seleccionar3] = useSeleccionar('4.- DOM stands for Document Only Module');
    const [select4, Seleccionar4] = useSeleccionar('5.- The next components belongs to ES6 standars');
    const [check, CheckB] = useCheckB('6- The next components belongs to ES6 standars');
    const [select6, Seleccionar6] = useSeleccionar('7.- The next require declaration belongs to ES6 standars: var React = require("react");');
    const [radio, RadioB] = useRadioButt('8.- The next require declaration belongs to ES6 standars: import React from "react";');
    const [area, AreaTex] = useAreaTexto('9.- Describe steps to create  a new React');
    const [area2, AreaTex2] = useAreaTexto('10.- Explain how lists work in React');

    //Validación
    const [error, setError] = useState(false);

    const handleSubmit = e =>{
        e.preventDefault();

                
        if ([select, select2, select3, select4, check, select6, radio, area].includes('')) {
            setError(true)
            return
        }

        setError(false)

    }

    return (
        <>
            <Formul

               onSubmit={handleSubmit} 
            >

                <Seleccionar1/>
                <Seleccionar2/>
                <Seleccionar3/>
                <Seleccionar4/>
                <CheckB/>
                <Seleccionar6/>
                <RadioB/>
                <AreaTex/>

                {error && <Error>Todos los campos son obligatorios</Error>}

                <InputSubmit
                    type="submit"
                    value="Enviar"
                />
            </Formul>
        </>
    )
}

export default Formulario