import React ,{useState, useEffect}from 'react'
import styled from 'styled-components'
import billieHoliday from '../../images/BillieHoliday.jpg'
import chetVid from '../../video/ChetBakerLIVE.mp4'
import JimHall from '../../video/JimHall.mp4'
import julieLondon from '../../video/JULIELONDON.mp4'
import julieLondonImg from '../../images/julieLondon.jpg'
import nujabes from '../../images/nujabes.jpg'


const Night = () => {
    const [position,setPosition] = useState(true)
    const [BottomFirst,setBottomFirst] = useState(true)
    const [BottomSecond,setBottomSecond] = useState(true)
    const [BottomThird,setBottomThird] = useState(true)
    const [color,setColor] = useState(true)
    const elementInView = (id) => {
        const scrollElement = document.getElementById(id)
        const elementTop = scrollElement.getBoundingClientRect().top;
        return elementTop 
    }

    const bottomScrollEvent = () =>{
        const scrollFirstHeight = elementInView("BottomFirst")
        const scrollSecondHeight = elementInView("BottomSecond")
        const scrollThirdHeight = elementInView("BottomThird")
        //console.log(scrollThirdHeight)  
        if(scrollFirstHeight >= 0){
            setBottomFirst(true)
        }else{
            setBottomFirst(false)
        }
        if(scrollSecondHeight >= 0){
            setBottomSecond(true)
        }else{
            setBottomSecond(false)
        }
        if(scrollThirdHeight <= 0){
            setBottomFirst(true)
            setBottomSecond(true)
            
        }
        if(scrollThirdHeight <= -20){
            setColor(false)
        }else{
            setColor(true)
        }
    }
    const scrollEvent = () =>{
        const scrollHeight = elementInView("pageone")
        const scrollFirstHeight = elementInView("BottomFirst")
        if(scrollHeight >= 0){
            setPosition(true)
        }else{
            if(scrollFirstHeight <= 0){
                setPosition(true)
            }else{
                setPosition(false)
            }
           
        }
    }


    useEffect(()=>{
        scrollEvent()
        window.addEventListener('scroll',()=>{
            scrollEvent()
            bottomScrollEvent()
        })
    },[])
    

    const videoSoundOn = (id) => {
        const videoId=document.getElementById(id)
        videoId.muted=false
    }
    const videoSoundOff = (id) => {
        const videoId=document.getElementById(id)
        videoId.muted=true
    }
    return (
        <Container id="Night">
            
            <TopContainer id="pageone" >
                <ContextPosition>
                    <TopContext position={position}>
                        <div>Enjoy Great Jazz</div>
                        <br/>
                        <div>and a great Sunnyday</div>
                    </TopContext>
                    <TopContext2 position={position}>Midnight, Earlier morning</TopContext2>
                </ContextPosition>
                <MiddleContainer>
                    <VideoOne 
                        src={chetVid} 
                        muted 
                        loop="true" 
                        autoPlay
                        onMouseOver={() => videoSoundOn('videoOne')} 
                        onMouseOut={() => videoSoundOff('videoOne')} 
                        id='videoOne'>
                    </VideoOne> 
                </MiddleContainer>
                <MiddleContainer>
                    <VideoTwo 
                        src={JimHall}
                        muted 
                        loop="true" 
                        autoPlay
                        onMouseOver={() => videoSoundOn('videoTwo')} 
                        onMouseOut={() => videoSoundOff('videoTwo')} 
                        id='videoTwo'>
                        </VideoTwo> 
                </MiddleContainer>
                <MiddleContainer>
                    <VideoThree src={julieLondon} 
                    muted 
                    loop="true" 
                    autoPlay
                    onMouseOver={() => videoSoundOn('videoThree')} 
                    onMouseOut={() => videoSoundOff('videoThree')} 
                    id='videoThree'>
                    </VideoThree> 
                </MiddleContainer>
            </TopContainer>

            <PictureContainer>
                <PicSizeLayout>
                    <PicImg></PicImg>
                    <PicContext>
                        In March 1939, a 23-year-old Billie Holiday walked up to the mic at West 4th's Cafe Society in New York City to sing her final song of the night. Per her request, the waiters stopped serving and the room went completely black, save for a spotlight on her face. And then she sang, softly in her raw and emotional voice: "Southern trees bear a strange fruit, Blood on the leaves and blood at the root, Black body swinging in the Southern breeze, Strange fruit hanging from the poplar trees..."
                    </PicContext>
                </PicSizeLayout>
            </PictureContainer>

            <PictureContainer>
                <PicSizeLayout2>
                    <PicContext2>
                        Why does the sun go on shining?
                        Why does the sea rush to shore?
                        Don't they know it's the end of the world
                        'Cause you don't love me anymore?...                    
                    </PicContext2>
                    <PicImg2></PicImg2>
                </PicSizeLayout2>
            </PictureContainer>
           
            <PictureContainer>
                <PicSizeLayout3>
                    <PicContext3>
                        <div>Rest In Beat Nujabes</div> 
                        Bring the jazz element in hip-hop.          
                    </PicContext3>
                    <PicImg3></PicImg3>
                </PicSizeLayout3>
            </PictureContainer>

            <BottomContainer id="BottomFirst" color={color}>
                <PageContainer>
                    <PageContext position={BottomFirst}>GOOD LIFE AND CHILL</PageContext>
                </PageContainer>
            </BottomContainer>
            <BottomContainer id="BottomSecond" color={color}>
                <PageContainer>
                    <PageContext position={BottomSecond}>Take a cup of coffee</PageContext>
                </PageContainer>
            </BottomContainer>    
            <BottomContainer id="BottomThird" color={color}>
                <PageContainer>
                    <PageContext position={BottomThird}>Enjoy more jazz</PageContext>
                </PageContainer>
            </BottomContainer>
           
        </Container>
    )
}

export default Night

const Container = styled.div`
    //background-color: #EBEDED;
    background-color: #E8B297;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`
const TopContainer = styled.div`
    width: 100%; 
    background-color: #E8B297;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const ContextPosition = styled.div`
    width: 100%; 
    height: 100vh;
    position: relative;
`
const TopContext = styled.div`
    position: ${({position}) => position ? 'absolute' : 'fixed'};
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 70%;
    text-align: center;
    font-size: 4.5em;
    color: #C72617;
    opacity: 0.8;
    font-family: 'Vidaloka', serif;    
    z-index: 3;
    text-transform: uppercase;
    @media screen and (max-width: 1440px){
        font-size: 3em;
    }
    @media screen and (max-width: 1024px){
        font-size: 2em;
    }
    @media screen and (max-width: 600px){
        font-size: 1.5em;
    }
    @media screen and (max-width: 500px){
        font-size: 1em;
    }
    @media screen and (max-width: 320px){
        font-size: 0.8em;
    }
`
const TopContext2 = styled(TopContext)`
    z-index: 1;
`
const MiddleContainer = styled.div` 
    position: relative;
    height: 100vh;
    width: 70%;
    @media screen and (max-width: 600px){
        width: 95%;
    }
    @media screen and (max-width: 320px){
        width: 100%;
    }
`
const VideoOne = styled.video`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0,-50%);
    width: 500px;
    height: 300px;
    object-fit: cover;
    z-index: 2;
    opacity: 1;
    @media screen and (max-width: 600px){
        width: 90%;
        height: 50%;
    }
    @media screen and (max-width: 320px){
        width: 100%;
    }
`
const VideoTwo = styled(VideoOne)`
    left: 0;
    z-index: 4; 
`
const VideoThree = styled(VideoOne)`
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 4;
    width: 600px;
    height: 400px;
    @media screen and (max-width: 600px){
        width: 90%;
        height: 40%;
    }
`
const PictureContainer = styled.div`
    position: relative;
    height: 150vh;
    width: 95%;
    background-color: #E8B297;
    @media screen and (max-width: 500px){
        width: 100%;
    }
`
const PicSizeLayout = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0,-50%);
    height: 50%;
    width: 70%;
    background-color: #E8B297;
    border-top: 1px solid #C72617;
    border-bottom: 1px solid #C72617;
    z-index: 100;
    display: flex;
    @media screen and (max-width: 768px){
        height: 40%;
    }
    @media screen and (max-width: 600px){
        width: 90%;
        height: 35%;
    }
    @media screen and (max-width: 500px){
        width: 100%;
    }
`
const PicImg = styled.div`
    width: 45%;
    background-image: url(${billieHoliday});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.8;
    @media screen and (max-width: 375px){
        width: 50%;
    }
`
const PicContext = styled.div`
    width: 55%;
    text-align: left;
    font-size: 1.5em;
    color: #C72617;
    opacity: 0.8;
    font-family: 'Vidaloka', serif;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 1024px){
        font-size: 1em;
    }
    @media screen and (max-width: 600px){
        font-size: 0.8em;
    }
    @media screen and (max-width: 500px){
        padding-left: 10px;
    }
    @media screen and (max-width: 375px){
        width: 50%;
    }
    @media screen and (max-width: 320px){
        transform: scale(0.8);
        
    }
`
const PicSizeLayout2 = styled(PicSizeLayout)`
    left: 0;
    transform: translate(0,-50%);
    height: 400px;
    width: 60%;
    @media screen and (max-width: 600px){
        width: 80%;
        height: 35%;
    }
    @media screen and (max-width: 500px){
        width: 100%;
        height: 300px;
    }
    
`
const PicImg2 = styled(PicImg)`
    background-image: url(${julieLondonImg});
    width: 60%;
`
const PicContext2 = styled(PicContext)`
    padding-left: 0;
    padding-right: 50px;
    @media screen and (max-width: 500px){
        padding-right: 10px;
        padding-left: 10px;
    }
    
`

const PicSizeLayout3 = styled(PicSizeLayout)`
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    height: 400px;
    width: 60%;
    @media screen and (max-width: 600px){
        width: 90%;
        height: 30%;
    }
    @media screen and (max-width: 500px){
        width: 100%;
    }
`
const PicImg3 = styled(PicImg)`
    background-image: url(${nujabes});
    width: 60%;
`
const PicContext3 = styled(PicContext)`
    padding-left: 0;
    padding-right: 50px;
    text-align: center;
    font-size: 1.6em;
    @media screen and (max-width: 1024px){
        font-size: 1em;
    }
    @media screen and (max-width: 600px){
        font-size: 0.8em;
    }
    @media screen and (max-width: 500px){
        padding-right: 10px;
        padding-left: 10px;
        transform: scale(0.8);
    }
`

const BottomContainer = styled.div`
    position: relative;
    display: flex;
    background-color: ${({color}) => color ? '#E8B297' : '#EBEDED'};
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 100;
    transition: background-color 0.3s ease-in;
    
`
const PageContainer = styled.div`
    position: relative;
    display: flex;
    border-top: 1px solid #C72617;
    width: 95%;
    height: 100vh;
`
const PageContext = styled.div`
    position: ${({position}) => position ? 'absolute' : 'fixed'};
    color: #C72617;
    opacity: 0.8;
    font-family: 'Vidaloka', serif;
    font-size: 3em;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    @media screen and (max-width: 1024px){
        font-size: 2em;
    }
    @media screen and (max-width: 600px){
        font-size: 1.5em;
    }
    @media screen and (max-width: 500px){
        font-size: 1em;
    }
    @media screen and (max-width: 320px){
        font-size: 0.8em;
    }
`









