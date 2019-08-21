import React, { Component } from 'react'
import RightButton from './RightButton'
import LeftButton from './LeftButton'

import Back from './Back';

import './Scene.css'


export default class Scene extends Component {
  _refreshPage() {
    console.log("Clicked");
    window.location.reload();
  }
 
    render() {
        return (
            <div class ='center'>
            
      
            <div class="ui inverted segment">
              <p>{this.props.scene.scene_text}</p>
        
       
        <h4 class="ui horizontal inverted divider">
          Choose
        </h4>
      </div>
      
              <div class="ui segment">
        <div class="ui two column very relaxed grid">
          <div class="column">
          {/* <button class='ui button' onClick={() => this.Prev()}> {this.props.scene.left_text} </button> */}
          <LeftButton  data={this.props.scene.left_text}  leftChoice= {this.props.leftChoice}/>
      
          </div>
          <div class="column">
          {/* <button class='ui button' onClick={() => this.Next()}> {this.props.scene.right_text} </button>  */}
          <RightButton  data={this.props.scene.right_text} rightChoice= {this.props.rightChoice}/>
          </div>
        </div>
        <div class="ui vertical divider">
          or
        </div>
      </div>
      <div class="ui centered two column grid">

        <div class="column">
          <Back back={this.props.back} id={this.props.scene.prev_id}/>
        </div>

        </div>
        <div class="ui segment">

        <div class="ui centered two column grid">
        
        < button onClick = {this._refreshPage} > Go to the beginning of time </button>
        
        </div>
        
        </div>
      
        
           
      </div>
          );
    }
}