import styled from "@emotion/styled"
import { useState } from "react"

const Label = styled.label`
color: #000;
display: block;
font-family: 'Lato', sans-serif;
font-size: 18px;
margin: 15px 0;
text-align: left;
`
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 12px;
    border-radius: 10px;
`

const useSeleccionar = (label) => {

    const [state, setState] = useState('');

    const selecionar = () => (

        <>
            <Label>{label}</Label>

            <Select
                value={state}
                onChange={e => setState(e.target.value)}
            >
                <option value="">Seleccione</option>
                <option key='1' value="True">True</option>
                <option key='2' value="false">False</option>
            </Select>
        </>


    )

    return [state, selecionar]

}

export default useSeleccionar