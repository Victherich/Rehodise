import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AppUpdate from './components/AppUpdate';
import OurSolutionsPage from './components/OurSolutionsPage';
import CallToCollaborate from './components/CallToCollaborate';
import ProjectsImpactPage from './components/ProjectsImpactPage';
import AboutPage from './components/AboutPage';
import SustainabilityPage from './components/SustainabilityPage';
import PartnershipsPage from './components/PartnershipsPage';
import ResourcesPage from './components/ResourcesPage';
import ContactPage from './components/ContactPage';


function App() {
  return (
    <BrowserRouter>
    <AppUpdate/>
    <ScrollToTop/>
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/solutions' element={<OurSolutionsPage/>}/>
        <Route path='/projects' element={<ProjectsImpactPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/sustainability' element={<SustainabilityPage/>}/>
        <Route path='/partnerships' element={<PartnershipsPage/>}/>
        <Route path='/resources' element={<ResourcesPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      <CallToCollaborate/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
