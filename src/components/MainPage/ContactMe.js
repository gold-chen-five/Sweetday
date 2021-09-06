import React ,{useState, useEffect}from 'react'
import styled from 'styled-components'
import biz from '../../images/biz_background.png'
import jonas from '../../images/jonas.jpg'
function ContactMe() {
    const [transform,setTransform]=useState(true)
    useEffect(() => {
        const backface = document.getElementById("backface")
        backface.addEventListener('click', (event) => {
            if(event.target == backface){
                setTransform(true)
            }
        })
    },[])
    
    return (
        <Container id='ContactMe' >
            <LeftContainer></LeftContainer>
            <RightContainer></RightContainer>
            
            <SelfIntro>
                <IntroBox>
                    <IntroTitle>Email</IntroTitle>
                    <IntroContext>rachel7465022@gmail.com</IntroContext>
                </IntroBox>
                <IntroBox>
                    <IntroTitle>Location</IntroTitle>
                    <IntroContext>Taiwan,Kaohsiung</IntroContext>
                </IntroBox>
                <IntroBox>
                    <IntroTitle>Tell me what you like</IntroTitle>
                    <IntroContext>Recommend me music</IntroContext>
                </IntroBox>
            </SelfIntro>

            <ContactCard>
                <Card transform={transform} >
                    <FrontFace onClick={() => setTransform(!transform)}>
                        <Logo>SweetDay</Logo>
                        <ClickMe>Click Me</ClickMe>
                        <ContactMeMark>Contact Me</ContactMeMark>
                        <ContactLocation>Taiwan,Kaohsiung</ContactLocation>
                        <ContactWebInfo>Music and Photo</ContactWebInfo>
                    </FrontFace>
                    <BackFace id="backface">
                        <Info>
                            <div>Name</div> 
                            <InfoInput type="text"></InfoInput>
                        </Info>
                        <Info>
                            <div>Email</div>  
                            <InfoInput type="text"></InfoInput>
                        </Info>
                        <Info>
                            <div>Talk to me</div>  
                            <InfoInput type="text"></InfoInput>
                        </Info>
                    </BackFace>
                </Card>    
            </ContactCard>
        </Container>
    )
}

export default ContactMe

const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    background-color: black;

`
const LeftContainer = styled.div`
    width: 50%;
    filter: blur(3px);
    @media screen and (max-width: 600px){
        display: none;
    }

`
const RightContainer = styled.div`
    width: 50%;
    background-image: url(${jonas});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(3px);
    @media screen and (max-width: 600px){
        width: 100%;
    }
`

const  SelfIntro = styled.div`
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%,-50%);
    height: 30%;
    width: 30%;
    //border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media screen and (max-width: 600px){
        height: 25%;
        width: 95%;
        top: 10%;
        left: 50%;
        transform: translate(-50%,0);
    }
`
const IntroBox = styled.div`
    border-top: 1px solid white;
    width: 100%;
    color: white;
    font-size: 0.7em;   
`
const IntroTitle = styled.div`
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    padding-top: 5px;
`
const IntroContext = styled.div`
    font-family: 'Roboto', sans-serif;
    
`
const ContactCard = styled.div`
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%,-50%);
    @media screen and (max-width: 600px){
        top: 50%;
        left: 50%;
        transform: translate(-50%,0);
    }
`
const Card = styled.div`
    position: relative;
    height: 229px;
    width: 400px;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: 2s ease-in-out;
    transform: perspective(500px) ${({transform}) => transform ? 'rotateY(0deg)' : 'rotateY(180deg)'};
    @media screen and (max-width: 768px){
        height: 171px;
        width: 300px;
    }
    
`
const FrontFace = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-image: url(${biz});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transform: perspective(500px) rotateY(0deg);
`
const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 5px;
    padding-left: 10px;
    font-size: 1.1em;
    font-weight: 700;
    font-family: 'Vidaloka', serif;
    @media screen and (max-width: 768px){
        transform: scale(0.8);
        padding-top: 3px;
        padding-left: 5px;
    }
`
const ClickMe = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding-top: 10px;
    padding-right: 10px;
    font-family: 'Vidaloka', serif;
    font-size: 5px;
    @media screen and (max-width: 768px){
        transform: scale(0.8);
        padding-top: 5px;
        padding-right: 5px;
    }
`

const ContactMeMark = styled.div`
    font-family: 'Vidaloka', serif;    
    font-size: 0.8em;
    text-transform: uppercase;
    transform: perspective(500px) translateZ(40px);
    @media screen and (max-width: 768px){
        transform: scale(0.8);
    }
`
const ContactLocation = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    padding-bottom: 10px;
    padding-right: 10px;
    font-family: 'Vidaloka', serif;
    font-size: 5px;
    @media screen and (max-width: 768px){
        transform: scale(0.8);
        padding-bottom: 5px;
        padding-right: 5px;
    }
`
const ContactWebInfo = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    padding-bottom: 10px;
    padding-left: 10px;
    font-family: 'Vidaloka', serif;
    font-size: 5px;
    @media screen and (max-width: 768px){
        transform: scale(0.8);
        padding-bottom: 5px;
        padding-left: 5px;
    }
`

const BackFace = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url(${biz});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transform-style: preserve-3d;
    transform: perspective(500px) rotateY(180deg);
    transition: 2s ease-in-out;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Info = styled.div`
    font-family: 'Lora', serif;
    font-size: 0.8em;
    padding: 10px;
    display: flex;
    div {
        padding-right: 10px;
    }
    @media screen and (max-width: 768px){
        transform: scale(0.9);
    }
`
const InfoInput = styled.input`
    border: none;
    border-bottom: 1px solid black;
    background-color: transparent;
    outline-style: none ;
`