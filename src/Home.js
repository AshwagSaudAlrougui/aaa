import React ,{Component} from  'react';
import axios from 'axios';
import './Home.css';
import YouTube from './YouTube'
import Drama from './Drama'
import { Switch,Route, Link, BrowserRouter as Router } from 'react-router-dom'
import NewScene from './NewScene';
import Scene from './Scene';
export * from "react-router";

let index=1;
let apiCallCount = 0;
class Home extends Component {

  state = {
    id: 77,
    prev_id: 77,
    
  scene: {},
  isEnd: false,
  isLeft: true,
  newID:0


  }

  updateView = (id1) => {
    
    //console.log(this.state.id)
    axios({
      method: 'GET',
      url: `https://cors-anywhere.herokuapp.com/https://aaa-api.herokuapp.com/scenes/${id1}.json`
    }).then(response => {
      this.setState({
        id: id1,
        isEnd: false
      })
      this.setState({scene: response.data}) 
    
    }).catch(error => console.log(error));
  }

  fakeAPICall = () =>
  new Promise((resolve, reject) => {
    apiCallCount++;
    if (apiCallCount % 3 === 2) {
    //   setTimeout(() => reject(new Error("fake error")), 1000);
    // } else {
      setTimeout(() => resolve(), 1000);
    }
 
  });

  Next = ()=> {

    
    if(this.state.scene.right_id){

    
      const scene =  this.state.scene
      scene.right_text = 'loading'
          this.setState({
            scene: scene
          
          })
            this.fakeAPICall();
            this.setState({
              id: this.state.scene.right_id
            
            })
      //console.log(this.state.id)
  this.callApi(this.state.scene.right_id)
    }

    else 
    this.setState({
      isEnd: true,
      isLeft: false,
      newID: this.state.scene.id
    })


  }

  callApi(id){

    axios({
      method: 'GET',
      url: `https://cors-anywhere.herokuapp.com/https://aaa-api.herokuapp.com/scenes/${id}.json`
    }).then(response => {
      
      this.setState({scene: response.data}) 
    
    }).catch(error => console.log(error));
  }

  Prev =  () => {

    if (this.state.scene.left_id){
   
    const scene =  this.state.scene
    scene.left_text = 'loading'
        this.setState({
          scene: scene
        
        })
          this.fakeAPICall();
          this.setState({
            id: this.state.scene.left_id
          
          })
    console.log(this.state.id)
this.callApi(this.state.scene.left_id)
        }
        else {
          this.setState({
            isEnd: true,
            isLeft: true,
            newID: this.state.scene.id
          })
        }





  }
  callApiBack(id){

    axios({
      method: 'GET',
      url: `https://cors-anywhere.herokuapp.com/https://aaa-api.herokuapp.com/scenes/${id}.json`
    }).then(response => {
      
      this.setState({scene: response.data}) 
    
    }).catch(error => console.log(error));
  }
  Back =  () => {

    if (this.state.scene.prev_id){
   
    const scene =  this.state.scene
  
        this.setState({
          scene: scene
        
        })
          this.setState({
            id: this.state.scene.prev_id
          
          })
    //console.log(this.state.id)
this.callApiBack(this.state.scene.prev_id)
        }
        
        




  }

  componentDidMount(){
    const scene =  this.state.scene
    scene.right_text = 'loading'
    scene.left_text = 'loading'
        this.setState({
          scene: scene
        }) 
    axios({
      method: 'GET',
      url: `https://cors-anywhere.herokuapp.com/https://aaa-api.herokuapp.com/scenes/${this.state.id}.json`
    }).then(response => {
      
      this.setState({scene: response.data}) 
      //console.log(this.state.scene.id);
    
    }).catch(error => console.log(error));
  }


  render() {
    if (this.state.isEnd)
      return <NewScene isLeft={this.state.isLeft} id={this.state.newID} updateView={this.updateView}/>
      else
      return <Scene scene={this.state.scene} prev={this.Prev} next={this.Next} back={this.Back}/>
    
  }
}




export default Home