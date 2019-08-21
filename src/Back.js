import React, { Component } from 'react';
import { Button , Segment} from 'semantic-ui-react';

export default class Back extends Component {

    constructor(props){
        super(props)
    }


    render() {
        
        return (
                <Segment inverted>
                <Button basic color='grey' onClick={()=>this.props.back(this.props.id)}> Back </Button>
                </Segment>
        )
    }
}
