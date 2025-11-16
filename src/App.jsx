import './App.css'
import Sidebar from './components/sidebar/Sidebar.jsx';
import Home from './components/content/Home.jsx';
import Technologies from './components/content/Technologies.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <div className='app'>
      <div className='sidebar'>
        <Sidebar/>
      </div>

      <div className='content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/technologies' element={<Technologies/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
