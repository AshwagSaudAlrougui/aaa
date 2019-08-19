import React, { Component } from 'react';

import StoryData from './StoryData'
class ImgDetails extends Component {

    render() {
        return (
            <div class="card">
       
                <p class="fade">{this.props.imgDetails.scene_text}</p>
            </div>
        )
    }
}


export default ImgDetails;