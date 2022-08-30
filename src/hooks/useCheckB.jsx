import styled from "@emotion/styled"
import { useState } from "react"
import ImagenCodigo from "../img/codigo.jpg"

const Label = styled.label`
color: #000;
display: block;
font-family: 'Lato', sans-serif;
font-size: 18px;
margin: 15px 0;
text-align: left;
`
const Imagen = styled.img`
width: 50%;
height: 50%;
`
const DivCkeck = styled.div`
display: flex;
`

const useCheckB
    = (label) => {

        const [state, setState] = useState('');

        const checkBo = () => (

            <>
                <Label>{label}</Label>

                <Imagen
                    src={ImagenCodigo}
                    alta="Imagen del código"
                />

                <DivCkeck>
                    <Label htmlFor="">
                        <input
                            type="checkbox"
                            value="true"
                            id="true"

                        />
                        True
                    </Label>

                    <Label htmlFor="">
                        <input
                            type="checkbox"
                            value="false"
                            id="false"
                        />
                        False
                    </Label>

                </DivCkeck>
            </>

        )

        return [state, checkBo]

    }

export default useCheckB
