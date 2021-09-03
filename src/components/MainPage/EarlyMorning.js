import React ,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Billevans from '../../images/bill-evans3.jpg'
import Billevans5 from '../../images/bill-evans5.jpg'
import ChetBaker from '../../images/chet-baker.jpg'
import ChetBaker2 from '../../images/Diane.jpg'
import YouGoToMyHead from '../../video/You-Go-to-My-Head.mp3'


const EarlyMorning = () => {
    const [scale,setScale]=useState('1')
    const [playscale,setPlayscale]=useState('1')
    const [translateY,setTranslateY]=useState(0)
    const Style={
        audioStyle: {
            transform: 'scale('+scale+')',
            transition: 'all 0.4s ease'
        },
        playStyle: {
            transform: 'scale('+playscale+')',
            transition: 'all 0.4s ease'
        },
        imgTwoStyle: {
            transform: 'translateY('+translateY+')',
            transition: 'transform 0.2s '
        }
    }

    const setStyle = (scale,playscale,play0Rstop) =>{
        setScale(scale)
        setPlayscale(playscale)
        playAudio(play0Rstop)  
    }

    const playAudio = (judge) => {
        console.log(judge)
        const audio = document.getElementById("Diane-audio")
        if(judge == "play"){
            //audio.currentTime = 0;
            audio.play()
        }else{
            audio.pause()
        }
       
    }
    const elementInView = (el) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop 
    }

    const bounding = () => {
        const scrollElement = document.querySelector(".scroll")
        const scrollHeight = elementInView(scrollElement)
        if(scrollHeight < 900 && scrollHeight > 800){
            setTranslateY('-10px')
        }
        else if(scrollHeight < 800 && scrollHeight > 700){
            setTranslateY('-20px')
        }
        else if(scrollHeight < 700 && scrollHeight > 600){
            setTranslateY('-30px')
        }
        else if(scrollHeight < 600 && scrollHeight > 500){
            setTranslateY('-40px')
        }
        else if(scrollHeight < 500 && scrollHeight > 400){
            setTranslateY('-50px')
        }
        else if(scrollHeight < 400 && scrollHeight > 300){
            setTranslateY('-60px')
        }
        else if(scrollHeight < 300 && scrollHeight > 200){
            setTranslateY('-70px')
        }
        else if(scrollHeight < 200 && scrollHeight > 100){
            setTranslateY('-80px')
        }
        else if(scrollHeight < 100 && scrollHeight > 0){
            setTranslateY('-90px')
        }
        else if(scrollHeight < 0){
            setTranslateY('-100px')
        }
        else{
            setTranslateY((prev)=>{
                if(prev != '0'){
                    return '0'
                }
            })
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            bounding()
        })
    },[])
    
    return (
        <Container id="EarlyMorning" >
            <PageContainer>
                <LeftContainer>
                    <BillieEvans></BillieEvans>
                </LeftContainer>
                <RightContainer>
                    <TextContainer>
                        <Title>
                            <div>THAT IS WHAT I LIKE.</div> 
                        </Title>
                        <IntroContext>Throughout jazz history, there have been few pianists whose style was as instantly recognizable as Bill Evans. Trained as a classical musician and renowned for his use of block chords and impressionistic harmonies, Evans appeared on countless records, including classics by Miles Davis and George Russell. He also led some of the music's most iconic sessions himself, penning iconic songs in the process and changing how the piano was used in jazz.</IntroContext>
                    </TextContainer>
                </RightContainer>  
            </PageContainer>
                
            <ImgTwo className="scroll" style={Style.imgTwoStyle}></ImgTwo>

            <ImgThree></ImgThree>
            <AudioCircle 
                onMouseOver={() => setStyle('1.2','0.8333333','play')}
                onMouseOut={() => setStyle('1','1','nonplay')}
                style={Style.audioStyle}
            >
                <Play style={Style.playStyle}>Chet Baker-You go to my head</Play>
            </AudioCircle>
            <audio id="Diane-audio" src={YouGoToMyHead} ></audio>
        </Container>
    )
}

export default EarlyMorning

const Container = styled.div`
    position: relative;
    background-color: #EBEDED;
    width: 100%;
    height: 300vh;
    transition: background-color 0.5s ease;
`
const PageContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    @media screen and (max-width: 600px){
        display: block;
        height: 120vh;
    }
`
const LeftContainer = styled.div`
    width: 45%;
    height: 100%;
    position: relative;
    @media screen and (max-width: 600px){
        width: 100%;
        height: 50%;
    }
`
const BillieEvans = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0,-50%);
    height: 80%;
    width: 90%;
    background-image: url(${Billevans});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    @media screen and (max-width: 600px){
        width: 100%;
        height: 100%;
    }
`
const RightContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 55%;
    @media screen and (max-width: 600px){
        width: 100%;
        height: 50%;
    }
`
const TextContainer = styled.div`
    position: absolute;
    width: 60%;
    height: 30%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    @media screen and (max-width: 600px){
        width: 40%;
        height: 80%;
    }
    @media screen and (max-width: 500px){
        width: 70%;
    }
`
const Title = styled.div`
    color: black;
    text-transform: uppercase;
    font-size: 2em;
    text-align: left;
    padding-bottom: 5%;
    font-family: 'Bebas Neue', cursive;
    @media screen and (max-width: 1024px){
        font-size: 1.5em;
    }
`
const IntroContext = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    color: black;
    font-size: 1em;
    weight: 400;
    font-family: 'Oswald', sans-serif;
    @media screen and (max-width: 1024px){
        font-size: 0.8em;
    }
`
const ImgTwo = styled.div`
    position: absolute;
    top: 35%;
    left: 60%;
    height: 350px;
    width: 350px;
    background-image: url(${Billevans5});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (max-width: 1024px){
        height: 250px;
        width: 250px;
    }
    @media screen and (max-width: 600px){
        height: 200px;
        width: 200px;
        top: 40%;
    }
    @media screen and (max-width: 500px){
        display: none;
    }
`
const ImgThree = styled.div`
    position: absolute;
    top: 50%;
    left: 5%;
    height: 650px;
    width: 550px;
    background-image: url(${ChetBaker});
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (max-width: 1024px){
        height: 500px;
        width: 350px;
    }
    @media screen and (max-width: 600px){
        left: 50%;
        width: 70%;
        transform: translate(-50%,0);
    }
    @media screen and (max-width: 500px){
        width: 80%;
    }
    @media screen and (max-width: 320px){
        width: 100%;
    }
`
const AudioCircle = styled.div`
    position: absolute;
    top: 60%;
    left: 65%;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    @media screen and (max-width: 1024px){
        height: 150px;
        width: 150px;
    }
    @media screen and (max-width: 600px){
        top: 60%;                   
        left: 0;        
        right: 0;
        margin: auto;
    }
`
const Play = styled.div`
    display: block;
    color: white;
    font-size: 0.8em;
    text-align: center;
    font-family: 'STIX Two Text', serif;
    @media screen and (max-width: 1024px){
        font-size: 0.5em;
    }
`