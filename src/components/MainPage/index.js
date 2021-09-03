import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Main from './Main'
import Night from './Night'
import Menu from './Menu'
import EarlyMorning from './EarlyMorning'
import Morning from './Morning'
import ContactMe from './ContactMe'
const MainPage = () => {
    const [display,setDisplay] = useState(false)
    useEffect(()=>{
        console.log(display)
    },[display])
    return (
        <Container scroll="no">
            <Menu/>
            <Main/>
            <Night/>
            <EarlyMorning/>
            <Morning setDisplay={setDisplay}/>
            <ContactMe display={display}/>
        </Container>
    )
}

export default MainPage

const Container = styled.div`
`