import { Routes, Route } from "react-router-dom"
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import Logement from './pages/Logement/Logement.jsx'
import APropos from './pages/APropos/APropos.jsx'
import Error404 from './pages/Error404/Error404.jsx'

function App(){
  return (
    <>
      <div className="container-1">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App
