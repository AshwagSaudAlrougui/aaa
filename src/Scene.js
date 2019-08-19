import React, { Component } from 'react'
import ImgDetails from './ImgDetails'
import RightButton from './RightButton'
import LeftButton from './LeftButton'
import StoryData from './StoryData'
export default class Scene extends Component {
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
