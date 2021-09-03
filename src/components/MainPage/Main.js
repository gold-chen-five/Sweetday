import React from 'react'
import styled from 'styled-components'
import Mark from '../Mark'
import backgroundVid from '../../video/Bill Evans - My Foolish Heart.mp4'
function Main() {
    return (
        <Container id="Main">
            <FirstContainer>
                <VideoContainer src={backgroundVid} muted loop="true" autoPlay></VideoContainer>
                <Mark/>
            </FirstContainer>
            
        </Container>
    )
}

export default Main

const Container = styled.div`    
`
const FirstContainer = styled.div`
    width: 100%;
    height: 100vh;
`

const VideoContainer = styled.video`
    width: 100%;
    height: 100vh;
    object-fit: cover;
`


