import React, {Suspense, lazy} from 'react';
import './index.css'

const About = lazy(()=> import("./Components/About"))


const App = () => {
  return (
    <div>
      <h1>Welcome Home</h1>
      <Suspense fallback={<p>Loading..</p>}>
        <About />      {/* it loads only when rendered*/}
      </Suspense>
    </div>
  )
}

export default App
