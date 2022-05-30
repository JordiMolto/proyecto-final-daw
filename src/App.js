import './App.css';
import './components/css/Header.css'
import './components/css/Button.css'
import './components/css/Icons.css'
import './components/css/About.css'
import './components/css/Contact.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import styled from 'styled-components'
//importamos los componentes que vamos a utilizar
import About from "./components/section/About"
import Skills from "./components/section/Skills"
import Templates from "./components/section/Templates"
import Contact from "./components/views/Contact"
import Home from "./components/views/Home"
import NavbarComp from './components/layouts/NavbarComp';
import Wallpapers from './components/views/Wallpapers'
import PoliticasCookies from './components/views/PoliticasCookies'
import PoliticasPrivacidad from './components/views/PoliticasPrivacidad'
import AvisoLegal from './components/views/AvisoLegal'
import ScrollButton from './components/section/ScrollButton';

/*const api = axios.create({
  baseURL:`http://localhost:3000/emails/`
})*/

function App() {

  return (
    <div className="App">

      <ScrollButton />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarComp />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/wallpapers" element={<Wallpapers />} />
            <Route path="/politicascookies" element={<PoliticasCookies />} />
            <Route path="/politicasprivacidad" element={<PoliticasPrivacidad />} />
            <Route path="/avisolegal" element={<AvisoLegal />} />

            {/* si no existe la url o se escribe mal, nos redirigirá a la home */}
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
