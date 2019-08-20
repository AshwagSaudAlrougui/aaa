import React ,{Component} from  'react';
import axios from 'axios';
import Scene from './Scene';
import './Home.css';

import NewScene from './NewScene';
// import console = require('console');
export * from "react-router";


class Home extends Component {

  state = {
    currentIndex: 1,
    scene: {},
    isEnd: false

  }

  

  Next() {

    if (this.state.scene.right_id == null)
    this.setState({isEnd: true})
    else{
      this.setState({
        currentIndex: this.state.scene.right_id
      
      })
      this.callApi(this.state.scene.right_id)
    }
  }

  callApi(id){

    axios({
      method: 'GET',
      url: `https://cors-anywhere.herokuapp.com/https://aaa-api.herokuapp.com/scenes/${id}.json`
    }).then(response => {
      
      this.setState({scene: response.data}) 
      //console.log(this.state.scene);
    
    }).catch(error => console.log(error));
  }

  Prev() {

    
      this.setState({
        currentIndex: this.state.scene.left_id
 
      })
      console.log(this.state.currentIndex)
      this.callApi(this.state.scene.left_id)
      console.log(this.state.scene.id)
    
    
  }

  componentDidMount(){

    axios({
      method: 'GET',
      url: `https://cors-anywhere.herokuapp.com/https://aaa-api.herokuapp.com/scenes/${this.state.currentIndex}.json`
    }).then(response => {
      
      this.setState({scene: response.data}) 
      //console.log(this.state.scene.id);
    
    }).catch(error => console.log(error));
  }


  render() {
    //console.log("hi")
    if ((this.state.scene.id===null)){
      //this.state.scene.id === this.state.currentIndex
      //console.log("hi")


    return <NewScene/> 
    }
    else{
      console.log("bye")

    return <Scene scene={this.state.scene}/>
    }
  }
}




export default Home