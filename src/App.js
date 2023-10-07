import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Text from './components/Text/Text';
import PropTypes from 'prop-types'
import Alert from './components/Alert/Alert';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState({
    message: "",
    type: ""
  });

  // Show alert function
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(function() {
     showAlert()
    }, 4000);
  }

  return (
 <>
   <Navbar title="TextAnalyzer" about="About Us" />
        <Alert type={alert.type} message={alert.message} />
        <div className='container my-3'>
          
            {/* <Route path='/about' element={<About/>} />
            Add more routes for other pages if needed */}
        
          <Text showAlert={showAlert} />
        </div>
        <Footer/>
        </>
      
  )
}

App.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string
};

export default App;
