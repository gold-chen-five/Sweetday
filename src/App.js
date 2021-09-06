import './App.css';
import styled from 'styled-components';
import MainPage from './components/MainPage'
import AudioRemind from './components/AudioRemind';
import React,{useState} from 'react'

function App() {

  const [check,setCheck] = useState(false)

  return (
      <Container>
          {
            !check ? (
                <AudioRemind setCheck={setCheck}/>
            ) : (
                <MainPage/>
            )
          } 
      </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  background-color: black;
`

