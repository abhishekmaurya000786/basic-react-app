import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {

    const dispatch = useDispatch();
    const user = useSelector(state=>state.user);
    const settings = useSelector(state=>state.settings)

  return (
    <div>
      
    </div>
  )
}

export default App
