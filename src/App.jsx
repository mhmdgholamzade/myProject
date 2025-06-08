import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import ContentBody from './Components/ContentBody';
import Footer from './Components/Footer';
import BodyBtm from './Components/BodyBtm';
import CommentForm from './Components/CommentForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThankYou from './Components/ThankYou ';


function App() {
 

  return (
    <>
      <Header />
      <ContentBody />
      <BodyBtm/>
      
      <Router>
      <Routes>
        <Route path="/" element={<CommentForm onSuccess={() => window.location.href = '/thank-you'} />} />
        <Route path="/thank-you" element={<ThankYou/>} />
      </Routes>
    </Router>
      <Footer />
    </>
  );
}

export default App;
