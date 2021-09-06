import React ,{useState,useEffect,useRef} from 'react'
import styled from 'styled-components'
import jonas2 from '../../images/jonas2.jpg'
import jonas3 from '../../images/jonas3.jpg'
import jonas4 from '../../images/jonas4.JPG'
import jonas5 from '../../images/jonas5.JPG'
import jonas6 from '../../images/jonas6.JPG'
import jonas7 from '../../images/jonas7.JPG'

function Morning() {
    const [scroll,setScroll] =useState(0)
    const Style ={
        elementWrapper: {
            transform: 'translateX(-'+scroll+'px)'
        }
    }
    function horizontalScroll(){
        const windowWidth = window.innerWidth
        const horizontalLength = document.querySelector('.elementWrapper').scrollWidth
        const distFromTop = document.querySelector('.horizontal-section').offsetTop
        const scrollDistance = distFromTop+horizontalLength-windowWidth
        document.querySelector('.horizontal-section').style.height = horizontalLength +"px"
        window.onscroll = function(){
            const scrollTop = window.pageYOffset
            if(scrollTop >= distFromTop && scrollTop <= scrollDistance){
                setScroll(scrollTop - distFromTop)
            }  
        }
        
    }
    useEffect(()=>{
        horizontalScroll()
    },[])
    return (
        <Container id="Sunnyday" className='horizontal-section'>
            <StickyWrapper>
                <ElementWrapper className='elementWrapper' style={Style.elementWrapper}>
                    <PageContainer>
                        <PageContainerFirst>
                            <PageContainerFirstTitle>Sunday vibe in the morning</PageContainerFirstTitle>
                            <PageContainerFirstContext>Taiwan,Kaohsiung,2021</PageContainerFirstContext>
                        </PageContainerFirst>
                    </PageContainer>

                    <PageContainer1>
                        <LeftContainer>
                            <LeftPageContainer>
                                <Title>
                                Why this website start?
                                </Title>
                                
                                <PageContext>
                                    <PageContextDate>2021,9,2</PageContextDate>
                                    Usually, I'm not confident in myself. I just doubt my ability of finishing a project. When all the thought comes to my mind, I feel anxious. It's not a big deal, but sometimes it disrupts me a lot. Fortunately, Jazz makes me feel peaceful in some situation. Your anxiety can be released easily. 
                                    Jazz makes you imagine beauty scenes, so I thoughts I can bring peaceful scene through a website. On the other hand, the process of making a website maybe can build up some of my confidence. And I might find a balance of music, life and stress.
                                </PageContext>
                            </LeftPageContainer>
                        </LeftContainer>
                        <RightContainer>
                            <RightContainerImg></RightContainerImg>
                        </RightContainer>
                    </PageContainer1>

                    <PageContainer2>
                        <LeftContainer2>
                            <LeftPageContainer>
                                <Title>
                                    Big thanks
                                </Title>
                                <PageContext>
                                    <PageContextDate>LikeFish</PageContextDate>
                                    <div>She is a graphic design assistance of the project.</div>
                                    <div>Poster design</div>
                                    <div>Business card design</div>
                                    <div>Product design</div>                             
                                </PageContext>
                            </LeftPageContainer>
                        </LeftContainer2>
                        <RightContainer2>
                            <RightContainerBox>
                                <RightContainerImg2></RightContainerImg2>
                                <RightImg2Info>
                                    Taiwan,Miaoli,2019
                                    <div>Tryna work out something</div>
                                </RightImg2Info>
                            </RightContainerBox>
                            <RightContainerBox>
                                <RightContainerImg2Second></RightContainerImg2Second>
                                <RightImg2Info>
                                    Taiwan,Taichung,2020
                                    <div>Take a walk in later night </div>
                                </RightImg2Info>
                            </RightContainerBox>
                        </RightContainer2>
                    </PageContainer2>

                    <PageContainer3>
                        <LeftContainer3>
                            <LeftPageContainer>
                                <Title>
                                    In Taichung.
                                </Title>
                                <PageContext>
                                    <PageContextDate>11 DEC 2020</PageContextDate>
                                    I like to take a walk with my girlfriend around Tunghai University. We have our own tasks to do, so we usually can't grab a time to spend together. Sometimes I just feel like we need a deep breath and just go out together, no matter doing anything. There's a lot of memory during the time live in Tunghai. I try to shoot it by my camera, so it can be remembered forever.                                </PageContext>
                                <Title>
                                    Talking about the website.
                                </Title>
                                <PageContext>
                                    <PageContextDate>05 OCT 2020</PageContextDate>
                                    After finish an exhausted week, I need a blue song to slow down a bit of my panic emotion. As a result, I usually let my mind flow through the melody of Jazz music, especially the jamming part.
                                    I let my mind flow through the bass line, the piano or the vocal, it brings me to a softy “blue room”. Time past fast in the room. That likes a line connecting Friday night and Saturday early morning. For letting you feel the same relax emotion I do,
                                    I create the website with some jazz elements and some of my daily photos.
                                </PageContext>
                            </LeftPageContainer>
                        </LeftContainer3>
                        <RightContainer3>
                            <RightContainerBox3>
                                <RightContainerImg3></RightContainerImg3>
                                <RightImg2Info>
                                    Taiwan,Kaohsuing,2020
                                    <div>Light and Cat</div>
                                </RightImg2Info>
                            </RightContainerBox3>
                            <RightContainerBox3Second>
                                <RightContainerImg3Second></RightContainerImg3Second>
                                <RightImg2Info>
                                    Taiwan,Taichung,2020
                                    <div>Hard working</div>
                                </RightImg2Info>
                            </RightContainerBox3Second>
                        </RightContainer3>
                    </PageContainer3>
                </ElementWrapper>
            </StickyWrapper>   
        </Container>
    )
}

export default Morning

const Container= styled.div`
    background-color: #EBEDED;
`
const StickyWrapper = styled.div`
   width: 100%;
   overflow: hidden;
   position: sticky;
   top: 0;
   background-color: #EBEDED;
   z-index: 200;
`
const ElementWrapper = styled.div`
    display: flex;
    position: relative;
`
const PageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-shrink: 0;
    position: relative;
`
const PageContainerFirst = styled.div`
    height: 40%;
    position: absolute;
    top: 70%;
    left: 0;
`
const PageContainerFirstTitle = styled.div`
    text-align: left;
    font-size: 5em;
    padding-left: 100px;
    font-family: 'Playfair Display SC', serif;
    opacity: 0.9;
    @media screen and (max-width: 1260px){
        font-size: 3.5em;
    }
    @media screen and (max-width: 1000px){
        font-size: 2.5em;
    }
    @media screen and (max-width: 600px){
        font-size: 2em;
    }
    @media screen and (max-width: 500px){
        font-size: 1.5em;
        padding-left: 50px;
    }
    @media screen and (max-width: 426px){
        font-size: 1.2em;
    }
    @media screen and (max-width: 320px){
        font-size: 1em;
    }
`
const PageContainerFirstContext = styled.div`
    font-size: 0.9em;
    text-align: right;
    color: #C72617;
    font-family: 'Playfair Display', serif;
    @media screen and (max-width: 600px){
        font-size: 0.8em;
    }
    @media screen and (max-width: 320px){
        font-size: 0.7em;
    }
`
const PageContainer1 = styled(PageContainer)`
    @media screen and (max-width: 600px){
        width: 200vw;
    }  
`
const LeftContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
   
    
`
const LeftPageContainer = styled.div`
    width: 50%;
    @media screen and (max-width: 426px){
        width: 70%;
    }  
`
const Title = styled.div`
    color: black;
    text-transform: uppercase;
    font-size: 2em;
    text-align: left;
    font-family: 'Bebas Neue', cursive;
    padding-bottom: 10px;
    @media screen and (max-width: 1000px){
        font-size: 1.5em;
    }
    @media screen and (max-width: 768px){
        font-size: 1.2em;
    }
    @media screen and (max-width: 376px){
        transform: scale(0.8);
        padding-bottom: 5px;
    }
`
const PageContextDate = styled.div`
    font-size: 0.9em;
    color: #C72617;
    font-family: 'Playfair Display', serif;
    display: inline;
    padding-right: 5px;
    @media screen and (max-width: 1000px){
        font-size: 0.8em;
    }
`
const PageContext = styled.div`
    font-size: 1em;
    font-family: 'Oswald', sans-serif;
    padding-bottom: 40px;
    @media screen and (max-width: 1000px){
        font-size: 0.8em;
    }
    @media screen and (max-width: 376px){
        transform: scale(0.8);
    }
`


const RightContainer = styled.div`
    height: 100%;
    width: 50%;
    position: relative;
`

const RightContainerImg = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${jonas2});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0,-50%);
`
const PageContainer2 = styled(PageContainer)`
    width: 180vw;
    @media screen and (max-width: 1260px){
        width: 200vw;
    }
    @media screen and (max-width: 768px){
        width: 250vw;
    }
    @media screen and (max-width: 600px){
        width: 280vw;
    }
    @media screen and (max-width: 426px){
        width: 400vw;
    }
`
const LeftContainer2 = styled(LeftContainer)`
    width: 40%;
    @media screen and (max-width: 1260px){
        width: 30%;
    }
`
const RightContainer2 = styled(RightContainer)`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1260px){
        width: 70%;
    }
`
const RightContainerBox = styled.div`
    width: 45%;
    height: 60%;
   
`
const RightContainerImg2 = styled.div`
    height: 95%;
    width: 100%;
    background-image: url(${jonas4});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
const RightImg2Info = styled.div`
    height: 0;
    width: 100%;
    padding-top: 10px;
    font-size: 0.8em;
    text-align: left;
    color: #C72617;
    font-family: 'Playfair Display', serif;
    @media screen and (max-width: 426px){
        font-size: 5px;
    }
    div {
        padding-top: 5px;
        color: black;
        font-family: 'Roboto', sans-serif;
    }
`
const RightContainerImg2Second = styled(RightContainerImg2)`    
    background-image: url(${jonas5});
`
const PageContainer3 = styled(PageContainer)`
    width: 180vw;
    @media screen and (max-width: 1260px){
        width: 250vw;
    }
    @media screen and (max-width: 600px){
        width: 400vw;
    }
`
const LeftContainer3 = styled(LeftContainer)`
    width: 40%;
    @media screen and (max-width: 1260px){
        width: 35%;
    }
    
`
const RightContainer3 = styled(RightContainer)`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1260px){
        width: 65%;
    }
`
const RightContainerBox3 = styled.div`
    width: 45%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1260px){
        height: 70%;
    }
   
`
const RightContainerImg3 = styled(RightContainerImg2)`
    background-image: url(${jonas6});
    width: 100%;
    height: 100%;
    background-size: cover;
`
const RightContainerBox3Second = styled(RightContainerBox3)`
    width: 45%;
    height: 60%;
`
const RightContainerImg3Second = styled(RightContainerImg2)`
    background-image: url(${jonas7});
    width: 100%;
    height: 100%;
    background-size: cover;
`


