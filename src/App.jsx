import { useState } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'

const Contenedor = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`
const Titulo = styled.h1`
  color: #fff;
  text-align: center;
  font-family: 'Lato', sans-serif;
`
const Texto = styled.p`
color: #fff;
text-align: center;
font-size: 24px;
font-family: 'Lato', sans-serif;
`


function App() {

  return (
    <Contenedor>
      <Titulo>Formulario</Titulo>
      <Texto>LLena correctamente el siguiente Formulario</Texto>
      <Formulario/>

    </Contenedor>
  )
}

export default App
