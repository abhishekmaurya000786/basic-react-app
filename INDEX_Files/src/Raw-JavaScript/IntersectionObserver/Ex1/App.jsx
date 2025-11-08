import React from 'react'
import './index.css';
const App = () => {
  return (
    <div>
      <h1>Lazy Loading Images with Intersection Observer.</h1>
      <div>
        
        <img data-src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg" className="" alt="Image 1" />
        <img data-src="https://images.pexels.com/photos/34950/pexels-photo.jpg" className="" alt="Image 2" />
        <img data-src="https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg" className="" alt="Image 3" />
        <img data-src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg" className="" alt="Image 4" />
        <img data-src="https://images.pexels.com/photos/333428/pexels-photo-333428.jpeg" className="" alt="Image 5" />

      </div>
    </div>
  )
}

export default App