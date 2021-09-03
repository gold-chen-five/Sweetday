import React from 'react'
import styled from 'styled-components'

function index() {
    return (
        <Container>
           <div>SLOW JAM</div> 
        </Container>
    )
}

export default index

const Container = styled.div`
    position: absolute;
    font-size: 35px;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Vidaloka', serif;
    @media screen and (max-width: 500px){
        font-size: 25px;
    }
`