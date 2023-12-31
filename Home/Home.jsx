import React from 'react'
import "./Home.css"
import { Carousal } from './Carousal'
import { Item } from './Item'
import { Link } from 'react-router-dom'
import { Footer } from './Footer'

export const Home = () => {
  return (
    <div className='Home_Whole'>
        <Carousal/>
        <Item/>
        <div className="view">
        <Link to='Products'><button>View All Products on Sale!</button></Link>
        </div>
        <Footer/>
        
    </div>
  )
}
