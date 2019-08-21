import React, { Component } from 'react';
<<<<<<< HEAD
import Home from './Home'
=======
>>>>>>> azzam-dev

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
<<<<<<< HEAD
}
=======
}
>>>>>>> azzam-dev
