import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API

    return (
      <div> 
        <BrowserRouter>
      
        <Navbar />
        <LoadingBar
        height={3}
        color='red'
        progress={progress}/>
      
          <Routes>

      <Route path = "/" element = {<News setProgress = {setProgress} apiKey = {apiKey}   key="general" country="in" category="general"/>}/>
      <Route exact path = "/Home" element = {<News setProgress = {setProgress} apiKey = {apiKey}key="home" country="in" category="general"/>}/>
      <Route exact path = "/Business" element = {<News setProgress = {setProgress} apiKey = {apiKey}key="business" country="in" category="business"/>}/>
      <Route exact path = "/Entertainment" element = {<News setProgress = {setProgress} apiKey = {apiKey}key="entertainment" country="in" category="entertainment"/>}/>
      <Route exact path = "/Health" element = {<News setProgress = {setProgress} apiKey = {apiKey}key="health"country="in" category="health"/>}/>
      <Route exact path = "/Science" element = {<News setProgress = {setProgress} apiKey = {apiKey}key="science"country="in" category="science"/>}/>
      <Route exact path = "/Sports" element = {<News setProgress = {setProgress} apiKey = {apiKey}key="sports"country="in" category="sports"/>}/>
      <Route exact path = "/Technology" element = {<News setProgress = {setProgress} apiKey = {apiKey}key="technology"country="in" category="technology"/>}/>

      </Routes>
      </BrowserRouter>
      </div>
    )
  }

  export default App;

