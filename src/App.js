import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API
  state = {
      progress:0
  }
  setProgress = (progress) =>{
    this.setState({progress : progress})
  }

  render() {
    return (
      <div> 
        <BrowserRouter>
      
        <Navbar />
        <LoadingBar
        height={3}
        color='red'
        progress={this.state.progress}/>
      
          <Routes>

      <Route path = "/" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}   key="general" country="in" category="general"/>}/>
      <Route exact path = "/Home" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}key="home" country="in" category="general"/>}/>
      <Route exact path = "/Business" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}key="business" country="in" category="business"/>}/>
      <Route exact path = "/Entertainment" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}key="entertainment" country="in" category="entertainment"/>}/>
      <Route exact path = "/Health" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}key="health"country="in" category="health"/>}/>
      <Route exact path = "/Science" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}key="science"country="in" category="science"/>}/>
      <Route exact path = "/Sports" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}key="sports"country="in" category="sports"/>}/>
      <Route exact path = "/Technology" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}key="technology"country="in" category="technology"/>}/>

      </Routes>
      </BrowserRouter>
      </div>
    )
  }
}

