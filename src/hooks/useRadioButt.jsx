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
const DivCkeck = styled.div`
display: flex;
`


const useRadioButt = (label) => {

    const [state, setState] = useState('');

    const radioB = () => (

        <>
            <Label>{label}</Label>

            <DivCkeck>
                <Label htmlFor="">
                    <input
                        type="radio"
                        value="true"
                        onChange={e => ( 
                            setState(e.target.value)
                            )}
                    />
                    True
                </Label>

                <Label htmlFor="">
                    <input
                        type="radio"
                        value="false"
                        onChange={e => ( 
                            setState(e.target.value)
                            )}
                    />
                    False
                </Label>

            </DivCkeck>



        </>


    )

    return [state, radioB]

}

export default useRadioButt