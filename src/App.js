import './App.css';
import Navbar from './components/Navbar/Navbar';
import Text from './components/Text/Text';
import PropTypes from 'prop-types'


function App() {
  return (
    <>
     <Navbar title ="TextAnalyzer" about = "About Us"/>
     <div className='container my-3'>
     <Text/>
     </div>
     
    </>
  );
}

export default App;

Navbar.prototype = {
  title: PropTypes.string,
  about:  PropTypes.string.isRequired

}
