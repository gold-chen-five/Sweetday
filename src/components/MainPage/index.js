import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Main from './Main'
import Night from './Night'
import Menu from './Menu'
import EarlyMorning from './EarlyMorning'
import Morning from './Morning'
import ContactMe from './ContactMe'
const MainPage = () => {
    return (
        <Container >
            <Menu/>
            <Main/>
            <Night/>
            <EarlyMorning/>
            <Morning/>
            <ContactMe/>
        </Container>
    )
}

export default MainPage

const Container = styled.div`
`