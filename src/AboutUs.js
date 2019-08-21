
import React ,{Component} from  'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import Home from './Home';
import './AboutUs.css';
import axios from 'axios';
// import {BrowserHistory} from 'react-router'
// export * from "react-router";
class AboutUs extends Component{

  state = {
    azzam: '',
    ashwaq:'',
    abdullah:''
  }

  componentDidMount(){

    axios.get('https://api.github.com/users/AlkhaldiAzzam').then(response => this.setState({azzam: response.avatar_url})).catch(error => console.log(error))
    axios.get('https://api.github.com/users/ASSROUGUI').then(response => this.setState({ashwaq: response.avatar_url})).catch(error => console.log(error))
    axios.get('https://api.github.com/users/aaltwaim').then(response => this.setState({abdullah: response.avatar_url})).catch(error => console.log(error))


  }

render(){





    return(
     

<div>


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>
{/* <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin /> */}

{/* <script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin
/> */}

{/* <script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin
/> */}


  

<div class ='aboutUs'>About Us</div>

<CardGroup>
    
    <Card>
      <Card.Img variant="top" src= {this.state.azzam} />
      <Card.Body>
        <Card.Title>Azzam Alkhaldi</Card.Title>
        <Card.Text>

        </Card.Text>
      </Card.Body>
      <Card.Footer>
   
 <a href="https://github.com/AlkhaldiAzzam"><i class="fa fa-github"style={{ backgroundColor: 'white', color: 'black' }}></i></a> {''}
  <a href="#"><i class="fa fa-linkedin"></i></a> {''}

  <p><div class="black">Contact</div></p>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src= {this.state.ashwaq} />
      <Card.Body>
        <Card.Title>AShwag Alrougui</Card.Title>
        <Card.Text>
      
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <a href="https://github.com/ASSROUGUI"><i class="fa fa-github"style={{ backgroundColor: 'white', color: 'black' }}></i></a> {''}
  <a href="#"><i class="fa fa-linkedin"></i></a> {''}
  <p><div class="black">Contact</div></p>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src= {this.state.abdullah} />
      <Card.Body>
        <Card.Title>Abdullah Aaltwaim</Card.Title>
        <Card.Text>

        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <a href="https://github.com/aaltwaim"><i class="fa fa-github"style={{ backgroundColor: 'white', color: 'black' }}></i></a> {''}
  <a href="#"><i class="fa fa-linkedin"></i></a> {''}
  <p><div class="black">Contact</div></p>
      </Card.Footer>
    </Card>
  </CardGroup>

  {/* <a href="/">home</a> */}
</div>




       
)
}

}


export default AboutUs