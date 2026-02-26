import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AppUpdate from './components/AppUpdate';


function App() {
  return (
    <BrowserRouter>
    <AppUpdate/>
    <ScrollToTop/>
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
