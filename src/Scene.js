import React, { Component } from 'react';
import ImgDetails from './ImgDetails';
import RightButton from './RightButton';
import LeftButton from './LeftButton';
import Home from './Home';
import axios from 'axios';
import './Scene.css';
import NewScene from './NewScene';

export default class Scene extends Component {
  // state = {
  //   currentIndex: 1,
  //   scene: {},
  //   isEnd: false

  // }
  // Next() {

  //   if (this.state.scene.right_id == null)
  //   this.setState({isEnd: true})
  //   else{
  //     this.setState({
  //       currentIndex: this.state.scene.right_id
      
  //     })
  //     this.callApi(this.state.scene.right_id)
  //   }
  // }

  // callApi(id){

  //   axios({
  //     method: 'GET',
  //     url: `https://cors-anywhere.herokuapp.com/https://aaa-api.herokuapp.com/scenes/${id}.json`
  //   }).then(response => {
      
  //     this.setState({scene: response.data})
      
  //     //console.log(this.state.scene);
    
  //   }).catch(error => {
      
  //     console.log(error)
      
    
  //   });
  // }

  // Prev() {

    
  //     this.setState({
  //       currentIndex: this.state.scene.left_id
 
  //     })
  //     //console.log(this.state.currentIndex) null
  //     this.callApi(this.state.scene.left_id)
  //     console.log(this.state.scene.id)
  //     console.log(this.state.scene.left_id)
  //     console.log(this.state.scene.scene_text)

    
    
  // }

  // componentDidMount(){

  //   axios({
  //     method: 'GET',
  //     url: `https://cors-anywhere.herokuapp.com/https://aaa-api.herokuapp.com/scenes/${this.state.currentIndex}.json`
  //   }).then(response => {
      
  //     this.setState({scene: response.data}) 
  //     //console.log(this.state.scene.id);
    
  //   }).catch(error => console.log(error));
  // }
    render() {
      
      
        return (
            <div class="ui inverted segment">
        <ImgDetails imgDetails={this.state.scene} />
  
 
  <h4 class="ui horizontal inverted divider">
    Choose
  </h4>


        <div class="ui segment">
  <div class="ui two column very relaxed grid">
    <div class="column">
    {/* <button class='ui button' onClick={() => this.Prev()}> {this.state.scene.left_text} </button> */}
    <LeftButton  data={this.state.scene.left_text}  prev= {()=>this.Prev()}/>

    </div>
    <div class="column">
    {/* <button class='ui button' onClick={() => this.Next()}> {this.state.scene.right_text} </button>  */}
    <RightButton  data={this.state.scene.right_text} next= {()=>this.Next()}/>
    </div>
  </div>
  <div class="ui vertical divider">
    or
  </div>
</div>

     
      </div>
    );
    }
}
