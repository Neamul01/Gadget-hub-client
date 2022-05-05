import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <h2>Hello</h2>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
