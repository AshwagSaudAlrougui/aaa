import React, { Component } from 'react';
import Home from './Home'

export default class Back extends Component {

    constructor(props){
        super(props)
    }


    render() {
        console.log(this.props.back)
        
        return (
            <div>
                <button class='ui button' onClick={this.props.back}> Back </button>
            </div>
        )
    }
}
