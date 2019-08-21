import React ,{Component} from  'react';
import axios from 'axios';
import './Home.css';
import './Nav.css';
import NewScene from './NewScene';
import Scene from './Scene';
export * from "react-router";

let apiCallCount = 0;
class Home extends Component {

  state = {
    id: 85,
    prev_id: 85,
    
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

  rightChoice = ()=> {

    
    if(this.state.scene.right_id){

    
      const scene =  this.state.scene
      scene.right_text = 'loading'
      scene.left_text = 'loading'

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
      console.log(response)
      this.setState({scene: response.data}) 
    
    }).catch(error => console.log(error));
  }

  leftChoice =  () => {

    if (this.state.scene.left_id){
   
    const scene =  this.state.scene
    scene.right_text = 'loading'
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
  
  Back =  (id1) => {
console.log(id1)
    // if (this.state.scene.prev_id){
   
    // const scene =  this.state.scene
  
    //     this.setState({
    //       scene: scene
        
    //     })
          this.setState({
            id: id1
          
          })
    //console.log(this.state.id)
this.updateView(id1)
        

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
      return(
        <div className="container">
        
        <NewScene isLeft={this.state.isLeft} id={this.state.scene.id} updateView={this.updateView} back={this.Back}/>
        </div>
        )
      else
      return( 
        <div className="scene">
      <Scene scene={this.state.scene} leftChoice={this.leftChoice} rightChoice={this.rightChoice} back={this.Back}/>
      </div>
      )
  }
}




export default Home