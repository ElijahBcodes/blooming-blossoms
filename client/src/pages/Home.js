import React from 'react'

const Home = () => {
  return (
    <>
    <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://img1.wsimg.com/isteam/ip/98e17155-3559-4e6d-b002-a2e739e05177/Screenshot_2020-02-10%20elaina%20hitchcock%20(%20elain.png/:/" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Humming Blossoms Floral Studio</h2>
    <p>Click the button to learn more</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Conact</button>
    </div>
  </div>
</div>
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full">
      <img src="https://img1.wsimg.com/isteam/ip/98e17155-3559-4e6d-b002-a2e739e05177/ig_18003014791420994.webp/:/rs=w:984,h:738" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
      <img src="https://images.unsplash.com/photo-1550237330-a5d774594098?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
      <img src="https://images.unsplash.com/photo-1458061406101-2ab686f68cb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGZsb3dlcmFsJTIwYm9xdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide4" className="carousel-item relative w-full">
      <img src="https://images.unsplash.com/photo-1469317835793-6d02c2392778?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZsb3JhbCUyMGJvcXVldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
  </>
  )
}

export default Home