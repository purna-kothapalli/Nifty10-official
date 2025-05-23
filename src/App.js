import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import About from './pages/About/About';
import Disclaimer from './pages/Disclaimer/Disclaimer';
import HelpDesk from './pages/HelpDesk/HelpDesk';
import './App.css';
import RefundPolicy from './pages/RefundPolicy/RefundPolicy';
import WinnersList from './pages/WinnersList/WinnersList';
import ProductPricing from './pages/ProductPricing/ProductPricing';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './pages/TermsConditons/TermsConditions';
import PointSystem from './pages/PointSystem/PointSystem';
import PdfViewer from './pages/PdfViewer/PdfViewer';
import PlayGuide from './pages/PlayGuide/PlayGuide';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/winners" element={<WinnersList />} />
          <Route path="/product-pricing" element={<ProductPricing />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/contact-us" element={<HomePage scrollToContact={true} />} />
          <Route path="/help-desk" element={<HelpDesk />} />
          <Route path='/points-system' element={<PointSystem/>}/>
          <Route path='/legal-opinion-skilled-game' element={<PdfViewer/>}/>
          <Route path='/play-guide' element={<PlayGuide/>}/>
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
