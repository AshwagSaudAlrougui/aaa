import React, { Component } from 'react';

export default class Back extends Component {

    constructor(props){
        super(props)
    }


    render() {
        
        return (
            <div>
                <button class='ui button' onClick={()=>this.props.back(this.props.id)}> Back </button>
            </div>
        )
    }
}
