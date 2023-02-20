import {BrowserRouter , Route, Routes } from "react-router-dom";
import Form from "./Pages/Form";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Home from "./Pages/Home";


const App = () => {
  return(
    <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/addsong" element={<Form />} />
            <Route exact path="/edit/:id" element={<Form />} />
          </Routes>
        </Container>
    </BrowserRouter>
  )
}
const Container = styled.div`
`
export default App;
