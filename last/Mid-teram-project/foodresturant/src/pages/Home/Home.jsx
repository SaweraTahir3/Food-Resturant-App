import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/Exploremenu/ExploreMenu'
import FoodDEsplay from '../../components/FoodDesplay/FoodDEsplay'

const Home = () => {
    const [category , setCategory] =useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDEsplay category={category}/>
      
    </div>
  )
}

export default Home
