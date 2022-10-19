
import React, { useState } from 'react'
import index from './index.module.scss'
import { useEffect,setState } from 'react'
import Product from './Product'
import { Routes,Route, Link } from 'react-router-dom'
import Categories from './Categories'
import User from './User'
const Index = () => {
  let [state,setState]=useState({dataloaded:false,data:{},mode:"Headlines",categories:{}})
//  Product useEffect
  useEffect(()=>{
let url='https://api.escuelajs.co/api/v1/products';
fetch(url)
.then((res)=>res.json())
.then((json)=>{
  setState({...state,data:json,dataloaded:true})
})
  },[])



  return (
   <>
   <nav className="nav">
    <div className="row flexAIC darkdiv navup"><i class="fa fa-superpowers" aria-hidden="true"></i>&nbsp;<h2>E-Commerce Store</h2></div>
    <div className="darkdiv navlink flexAIC now">
      <Link to="/"><span>Products</span></Link>
      <Link to="/Categories"><span>Categories</span></Link>
      <Link to="/Users"><span>Users</span></Link>
      <Link to="/panel"><span>Controll Panel</span></Link>
      <Link to="/digitalClock"><span>Digital Clock</span></Link>
      <span className='searchSpan row flexAIC'><input type="text" />&nbsp;<i class="fa fa-search" aria-hidden="true"></i></span>
      <select className='btn-trans bar' id="">
      <option>About</option>
      <option>Our Network</option>
      <option>News Room</option>
      <option>Worlwide Foundation</option>
      </select>
    </div>
    <div className="p3 btn-info row" style={{borderRadius:"none"}}>E-Commerce &nbsp;<i class="fa fa-bars" aria-hidden="true"></i></div> 
    </nav>


   <Routes>
    <Route path="/" index element={ <Product data={state}/>} />
    <Route path="/Categories" element={ <Categories data={state.data}/>} />
    <Route path="/Users" element={ <User data={state.data}/>} />

   </Routes>
   </>
  )
}

export default Index