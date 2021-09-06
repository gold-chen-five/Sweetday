import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';
function AudioRemind({setCheck}){
   const [scale,setScale] = useState("1")
   const [display,setDisplay] = useState('block')
   const [opacity,setOpacity] = useState('1')
   const setCircle = (scale,display) => {
      setScale(scale)
      setDisplay(display)
   }
   const onClickChange = () =>{
      setOpacity('0')
      window.setTimeout(() => setCheck(true),1000)
   }
  
   return (
      <Container opacity={opacity}>
         <MiddleContainer>
               <SweetdayMark>SweetDay</SweetdayMark>
               <VolumeUpRoundedIcon/>
               <Context>
               This website uses audio to 
               <div>enhance your experience</div>
            </Context>
               <LetgoBtn 
                  onClick={() => onClickChange()}
                  onMouseOver={() => setCircle('1.4','none')}
                  onMouseOut={() => setCircle('1','block')}
                  transform={scale} 
               >
                  <LetgoContext display={display}>Let's go</LetgoContext>
               </LetgoBtn>
         </MiddleContainer>
      </Container>
   )
}

export default AudioRemind
 const Container = styled.div`
   width: 100%;
   height: 100vh;
   background-color: black;
   display: flex;
   justify-content: center;
   align-items: center;
   opacity: ${({opacity}) => opacity};
   transition: opacity 2s ease;
 `
 const MiddleContainer = styled.div`
   width: 30%;
   height: 100%;
   color: white;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   @media screen and (max-width: 1000px){
      width: 50%;
   }
   @media screen and (max-width: 600px){
      width: 70%;
   }
   @media screen and (max-width: 320px){
      width: 80%;
   }
 `
 const SweetdayMark = styled.div`
   font-size: 35px;
   font-family: 'Vidaloka', serif;
   padding-bottom: 15%;
   @media screen and (max-width: 600px){
      font-size: 25px;
   }
 `
 const Context = styled.div`
   font-size: 1.3em;
   padding-bottom: 10%;
   font-family: 'Vidaloka', serif;
   text-align: center;
   @media screen and (max-width: 426px){
      font-size: 1em;
   }
   
 `
 const LetgoBtn = styled.div`
   border: 1px solid  white;
   border-radius: 50%;
   width: 100px;
   height: 100px;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   transform: scale(${({transform}) => transform});
   transition: all 0.4s ease;
 `
 const LetgoContext = styled.div`
   display: ${({display}) => display}; 
   transition: display 1s ease-in-out;
   font-family: 'Vidaloka', serif;
 `