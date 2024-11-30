import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './conpanents/Header/Header';
import Main from './conpanents/Main/Main';
import Footer from './conpanents/Footer/Footer';



function App() {
  return (
   
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
