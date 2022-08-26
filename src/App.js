import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './componets/layout/Footer';
import Header from './componets/layout/Header';

import ContactoPage from './pages/ContactoPage';
import IdexPage from './pages/IndexPage';
import MineraPage from './pages/MineriaPage';
import StakingPage from './pages/StakingPage';
import NosotrosPage from './pages/NosotrosPage';
import NFTPage from "./pages/NFTPage";
import FAQPage from './pages/FAQPage';
import CriptocardPage from './pages/CriptocardPage';



function App() {
  return (
    <div className="App">

      <Header/>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<IdexPage />}/>
        <Route path='nosotros' element={<NosotrosPage />}/>
        <Route path='contacto' element={<ContactoPage />}/>
        <Route path='mineria' element={<MineraPage />}/>
        <Route path='NFT' element={<NFTPage />}/>
        <Route path='FAQ' element={<FAQPage />}/>
      </Routes>
      </BrowserRouter>

      <Footer />
      
    </div>


  );
}

export default App;