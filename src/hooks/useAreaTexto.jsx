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
const AreaText = styled.textarea`
    width: 100%;
    border-radius: 10px;
`


const useAreaTexto = (label) => {

    const [state, setState] = useState('');

    const areaText = () => (

        <>
            <Label>{label}</Label>


            <AreaText
                value={state}
                onChange={e => setState(e.target.value)}
                rows={8}
            />

        </>


    )

    return [state, areaText]

}

export default useAreaTexto