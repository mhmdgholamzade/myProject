import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import ContentBody from './Components/ContentBody';
import Footer from './Components/Footer';
import BodyBtm from './Components/BodyBtm';
import CommentForm from './Components/CommentForm';


function App() {
 

  return (
    <>
      <Header />
      <ContentBody />
      <BodyBtm/>
      <CommentForm/>
      <Footer />
    </>
  );
}

export default App;
