
import React from 'react';
import Home from './Containers/Home';
import About from '//Containers/About';
import Skills from './Containers/Skills';
import Portfolio from './Containers/Portfolio';
import Resume from './Containers/Resume';
import Contact from './Containers/Contact';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    
<Routes>
  <Route index path ='/' element={<Home/>}/>
  <Route path ='/About' element={<About/>}/>
  <Route path ='/Skills' element={<Skills/>}/>
  <Route path ='/Portfolio' element={<Portfolio/>}/>
  <Route path ='/Resume'  element={<Resume/>}/>
  <Route path ='/contact' element={<Contact/>}/>
</Routes>

     
    </div>
  );
}

export default App;
