import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home/Home';
import Inventory from './components/Inventory/Inventory'
import NotFound from './components/Shared/NotFound/NotFound';
import InventoryItem from './components/Home/InventoryItem/InventoryItem';
import Login from './components/Login/Login/Login';
import Signup from './components/Login/Signup/Signup';
import AddItem from './components/AddItem/AddItem';
import ManageItems from './components/ManageItems/ManageItems';
import MyItems from './components/MyItems/MyItems';

function App() {
  return (
    <div className="App relative">
      <div className='sticky-md-top'>
        <Header></Header>
      </div>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:id' element={<InventoryItem></InventoryItem>}></Route>

        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/manageitems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
