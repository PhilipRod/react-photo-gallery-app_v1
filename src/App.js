import React from "react";
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import Results from './components/Results';
import apiKey from "./config";
import axios from 'axios'
import NotFound from './components/NotFound';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

class App extends React.Component{

  state = {
  "photo":[],
  "cats":[],
  "dogs":[],
  "birds":[],
  "loading":true,
  "query":''
};

componentDidMount(){
  this.searchPhotos()
  this.searchPhotos("cats")
  this.searchPhotos("dogs")
  this.searchPhotos("birds")
  
}




searchPhotos = (query) => {
  
  this.setState({
    query:this.state.query
  })

  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      if (res){
        this.setState({
          photo:res.data.photos.photo,
          loading:false
        })
      }
      
      if (query === "cats") {
        this.setState({
          cats:res.data.photos.photo,
          loading:false
        })
      }

      if (query === "dogs") {
         this.setState({
          dogs:res.data.photos.photo,
          loading:false
        })
      }

      if (query === "birds") {
         this.setState({
          birds:res.data.photos.photo,
          loading:false
        })
      }
    
      
    })
     
}


render(){
   return(
    <BrowserRouter>
      <div className="App">
        <SearchForm onSearch = {this.searchPhotos}/>
        <Nav />
        
        {this.state.loading ? 'Loading...' :
          <Switch>
            <Route exact path="/" render={()=> <Results photos = {this.state.photo} />} />
            <Route path="/cats" render={()=> <Results photos = {this.state.cats} />} />
            <Route path="/dogs" render={()=> <Results photos = {this.state.dogs} />} />
            <Route path="/birds" render={()=> <Results photos = {this.state.birds}/>} />

            <Route Component= {NotFound} />
          </Switch>
        }
      </div>
    </BrowserRouter>
  );
  
}

}


export default App;
