import './App.css';
import styled from 'styled-components';
import MainPage from './components/MainPage'

function App() {
  return (
    <Container>
      <MainPage/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  //background-color: #8CB0AB;
  //background-color: #D4D4D4;
  width: 100%;
  background-color: black;
  //background-color: #EDECE9;
`

