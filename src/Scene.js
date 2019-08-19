import React, { Component } from 'react'
import ImgDetails from './ImgDetails'
import RightButton from './RightButton';
import RightButton from './RightButton';
export default class Scene extends Component {
    render() {
        return (
            <div class ='center'>
      

      <div class="ui inverted segment">
        <ImgDetails imgDetails={this.props.scene} />
  
 
  <h4 class="ui horizontal inverted divider">
    Choose
  </h4>
</div>

        <div class="ui segment">
  <div class="ui two column very relaxed grid">
    <div class="column">
    <button class='ui button' onClick={() => this.Prev()}> {this.props.scene.left_text} </button>

    </div>
    <div class="column">
    <button class='ui button' onClick={() => this.Next()}> {this.props.scene.right_text} </button> 

    </div>
  </div>
  <div class="ui vertical divider">
    or
  </div>
</div>

     
      </div>
        )
    }
}
