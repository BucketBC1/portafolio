import './App.css'
import Sidebar from './components/sidebar/Sidebar.jsx';
import Home from './components/content/Home.jsx';
import About from './components/content/About.jsx';
import Technologies from './components/content/Technologies.jsx';
import Projects from './components/content/Projects.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import boxicons from 'boxicons';

function App() {


  return (
    <div className='app'>
      <div className='sidebar'>
        <Sidebar/>
      </div>

      <div className='content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/technologies' element={<Technologies/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
