import React ,{useState, useEffect}from 'react'
import styled from 'styled-components'
import biz from '../../images/biz_background.png'
import jonas from '../../images/jonas.jpg'
function ContactMe({display}) {
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
    //display: ${({display}) => display ? 'flex' : 'none'};
    //display: none;
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    background-color: black;

    //background-color: #4DADFF;
    //background-image: url(data:image/png;base64,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);
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