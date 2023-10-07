import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Text from './components/Text/Text';
import PropTypes from 'prop-types'
import Alert from './components/Alert/Alert';

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
        
        <Text showAlert={showAlert} />
  
        
      </div>
    </>
  );
}

App.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string
};

export default App;
