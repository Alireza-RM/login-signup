import { useState } from 'react'

import SignUp from './components/SignUp'
import Login from './components/Login'

import {Route,Routes,Navigate} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Navigate to='/signup'/>}/>
      </Routes>
      
      
    </div>
  )
}

export default App
