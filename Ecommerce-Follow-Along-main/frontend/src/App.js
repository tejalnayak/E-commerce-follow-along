import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {LoginPage,SignupPage,Home,CreateProduct,MyProducts,Cart,ProductDetails} from './routes/route.js';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/createproduct' element={<CreateProduct/>}></Route>
        <Route path='/create-product/:id' element={<CreateProduct/>}></Route>
        <Route path='/myproducts' element={<MyProducts/>}></Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App