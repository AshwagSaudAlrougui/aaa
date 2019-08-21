import React, { Component } from 'react'
import RightButton from './RightButton'
import LeftButton from './LeftButton'

import Back from './Back';

import './Scene.css'


export default class Scene extends Component {
 
    render() {
        return (
            <div class ='center'>
            
      
            <div class="ui inverted segment">
              <p>{this.props.scene.scene_text} </p>
        
       
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
          <Back back={this.props.back}/>
        
           
            </div>
          );
    }
}
