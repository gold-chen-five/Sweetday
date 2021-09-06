import React ,{useEffect,useState}from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
function Menu() {
    const [color,setColor] = useState('white')
    const [display,setDisplay] = useState(false)
    const [menuDisplay,setMenuDisplay] = useState('flex')
    const elementInView = (id) => {
        const scrollElement = document.getElementById(id)
        const elementTop = scrollElement.getBoundingClientRect().top;
        return elementTop 
    }
    function MenuColorSelect(){
        const scrollHeight=elementInView('Night')
        const scrollHeight2=elementInView('EarlyMorning')
        const scrollHeight3=elementInView('ContactMe')
        const scrollHeight4=elementInView('Sunnyday')

        if(scrollHeight > 5){
            setColor('white')
        }else{
            if(scrollHeight2 > 5){
                setColor('#C72617')
            }else{
                if(scrollHeight3 > 5){
                    setColor('black')
                }else{
                    setColor('white')
                }
                
            }
        }
        if(scrollHeight4 < -5){
            if(scrollHeight3 < 5){
                setMenuDisplay('flex')
            }else{
                setMenuDisplay('none')
            }
            
        }else{
            setMenuDisplay('flex')
        }
    }
 
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            MenuColorSelect()
        })
    },[])

    
    useEffect(()=>{
        if(display){
            setColor('black')
            document.body.style.overflow = "hidden"
        }else{
            setColor('white')
            document.body.style.overflow = "scroll"
        }
    },[display])
    return (
        <Table>
            <Container color={color} zIndex={display} display={menuDisplay}>
                <SweetDay
                    activeClass="Main"
                    to="Main"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >SweetDay</SweetDay>
                <RightMenu borderColor={color}>
                    <Daily
                        activeClass="active"
                        to="Night"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >Midnight</Daily>
                    <Music
                        activeClass="active"
                        to="EarlyMorning"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >Early Morning</Music>
                    <Photo
                        activeClass="active"
                        to="Sunnyday"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >Sunnyday</Photo>
                    <Morning
                        activeClass="active"
                        to="ContactMe"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >Contact Me</Morning>
                </RightMenu>
                <RightMenu768 onClick={() => setDisplay(!display)}>Menu</RightMenu768>
            </Container>

            <Menu768 display={display}></Menu768> 
            <ContextCenter display={display}>
                <Link1
                    activeClass="active"
                    to="Night"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setDisplay(false)}
                >Midnight</Link1>
                <Link2
                    activeClass="active"
                    to="EarlyMorning"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setDisplay(false)}
                >Early Morning</Link2>
                <Link3
                    activeClass="active"
                    to="Sunnyday"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setDisplay(false)}
                >Sunnyday</Link3>
                <Link4
                    activeClass="active"
                    to="ContactMe"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setDisplay(false)}
                >Contact Me</Link4>
            </ContextCenter>
        </Table>
    )
}

export default Menu
const Table = styled.div`
    height: 0; 
    width: 100%;
    animation: 2s contextZoneIn ease;
`
const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    color: ${({color}) => color};
    display: ${({display}) => display};
    width: 100%;
    padding: 1% 3% 0 3%;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    z-index: ${(zIndex) => zIndex ? '100000' : '100'};
    transition: z-index 0.5s ;
   
`
const SweetDay = styled(Link)`
    width: 60%;
    font-size: 25px;
    cursor: pointer;
    font-family: 'Vidaloka', serif;
    @media screen and (max-width: 1024px) {
        width: 40%;
    }
    @media screen and (max-width: 768px){
        width: 80%;
    } 
`
const RightMenu = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    font-size: 0.2em;
    cursor: pointer;
    text-transform: uppercase;
    opacity: 0.9;
    @media screen and (max-width: 1260px) {
        width: 60%;
        transform: scale(0.8);
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
    a.active {
        border-right: 2px solid ${({borderColor}) => borderColor };
        border-left: 2px solid ${({borderColor}) => borderColor };
    }
    
`
const Daily = styled(Link)`
    margin-right: 6%;
    padding-right: 2%;
    padding-left: 2%;
    cursor: pointer;
`
const Music = styled(Link)`
    margin-right: 6%;
    padding-right: 2%;
    padding-left: 2%;
    cursor: pointer;
`
const Photo = styled(Link)`
    margin-right: 6%;
    padding-right: 2%;
    padding-left: 2%;
    cursor: pointer;
`
const Morning = styled(Link)`
    padding-right: 2%;
    padding-left: 2%;
    cursor: pointer;
`
const RightMenu768 = styled.div`
    display: none;
    font-size: 0.2em;
    cursor: pointer;
    text-transform: uppercase;
    opacity: 0.9;
    @media screen and (max-width: 768px) {
        display: flex;
        width: 20%;
        justify-content: center;
        align-items: center;
    }
`
const Menu768 = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #E8E8E8;
    z-index: 10000;
    transform: translateY(${({display}) => display ? '0' : '-100%'}); 
    transition: transform 0.4s ease-in-out;
`


const ContextCenter = styled.div`
    position: fixed;
    left: 0;
    top: 10%;
    z-index: 100000;
    color: black;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2em;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
    opacity: 0.9;
    display: ${({display}) => display ? 'flex' : 'none' };
    flex-direction: column;
    padding-left: 25px;
    transition: position 1s ease-in; 
    
`
const Link1 = styled(Link)`
`
const Link2 = styled(Link)`
`
const Link3 = styled(Link)`
`
const Link4 = styled(Link)`
`