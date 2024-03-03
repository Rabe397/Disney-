import React from 'react' ;
import "./App.css" ;
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Details from './components/details/Details';
import Login from './components/login/Login';

function App() {
    
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/home' element={
        <> 
          <Home />
          <Footer />
        </>} 
        />
       <Route path='/details/:id' element={<Details />} />
       <Route path='/' element={<Login />} />  
    </Routes> 
    </Router> 
  );
}

export default App;

// react-router-dom
// styled-components
// react-slick
//firebase - firebase-tools
//reduxtk - redux-thunk
