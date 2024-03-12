import React from 'react'
import './Home.css'
function Home() {
  return (
    <div className='home-container'>
        <div className='home-left'>
            <h1>We are changing the way people shop</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
            <button>Our products</button>
        </div>
        
        <div className='home-right'>
        <img src="https://smebel.uz/files/proekti/krovati/101.jpg"  width={500} alt="" />
        </div>

        
    </div>
  )
}

export default Home