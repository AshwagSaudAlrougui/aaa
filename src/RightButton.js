
import React, { Component } from 'react'
import { Button , Segment} from 'semantic-ui-react';
export default class RightButton extends Component {
constructor(props){
    super(props)
}
    state = {
        currentIndex: 1,

      }



    render()
     {

        return (
            <div>
                <Segment inverted>
            <Button  color='black' fluid onClick={this.props.rightChoice}>
            {this.props.data}
                 </Button>
                 </Segment>
                


            </div>
        )
    }
}



