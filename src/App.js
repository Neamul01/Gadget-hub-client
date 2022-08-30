import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home/Home';
import NotFound from './components/Shared/NotFound/NotFound';
import InventoryItem from './components/Home/InventoryItem/InventoryItem';
import Login from './components/Login/Login/Login';
import Signup from './components/Login/Signup/Signup';
import AddItem from './components/AddItem/AddItem';
import ManageItems from './components/ManageItems/ManageItems';
import MyItems from './components/MyItems/MyItems';
import ProtectedRoute from './components/Shared/ProtectedRoute/ProtectedRoute';
import Blogs from './components/Blogs/Blogs';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App relative">
      {/* toaster to show notifications */}
      <Toaster
        position="top-right"
        reverseOrder={true}
      />

      <div className='sticky-md-top'>
        <Header></Header>
      </div>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory/:id' element={
          <ProtectedRoute>
            <InventoryItem></InventoryItem>
          </ProtectedRoute>
        }></Route>

        <Route path='/additem' element={
          <ProtectedRoute>
            <AddItem></AddItem>
          </ProtectedRoute>
        }></Route>
        <Route path='/manageitems' element={
          <ProtectedRoute>
            <ManageItems></ManageItems>
          </ProtectedRoute>
        }></Route>
        <Route path='/myitems' element={
          <ProtectedRoute>
            <MyItems></MyItems>
          </ProtectedRoute>
        }></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
