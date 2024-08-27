import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import {Toaster} from 'react-hot-toast';
import Home from './pages/Home'
import Success from './pages/Success'
import NotFound from './pages/NotFound'

function App() {
  // const [count, setCount] = useState(0)

  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Success" element={<Success/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}
export default App;
