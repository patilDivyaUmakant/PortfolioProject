import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import homepage from './pages/Homepage';
import aboutPage from './pages/Aboutpage';
import ContactPage from './pages/ContactPage';
import Header from './components/header';
import Footer from './components/footer'
import Portfolio from './pages/Portfolio'
import './App.css'



function App() {
  return (
      <Router>
      <Container className="p-0" fluid={true}>  
      <Header/>
        <Route path="/" exact component={homepage} />
        <Route path="/about" component={aboutPage} />
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={ContactPage}/>
        <Footer/>
      </Container>
    </Router>
  )
}

export default App
