import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { bounce ,bounceIn,pulse } from 'react-animations';
import FadeIn from 'react-fade-in';
import Fade from 'react-fade-opacity';
import Fade1 from './opacity1';
import Fade2 from './opacity2';
import Fade3 from './opacity3';
import Fade4 from './opacity4';
import styled, { keyframes } from 'styled-components';
import './Welcome.css';
import StarfieldAnimation from 'react-starfield-animation'
import AudioPlayer from "react-h5-audio-player";




const Bounce = styled.div`animation: 1s ${keyframes`${bounce}`} infinite`;
const BounceIn = styled.div`animation: 1s ${keyframes`${bounceIn}`}infinite`;
// const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`} infinite`;
const Pulse = styled.div`animation: 1s ${keyframes`${pulse}`} infinite`;



class Welcome extends Component {
    render ()
    {
     return (
         <div>
          
       <StarfieldAnimation
         style={{
           position: 'absolute',
           width: '100%',
           height: '100%',
           background:'black',
           
         }}
       />
    <div class='g'style={{color: 'black'}}>
   </div> 
 */}
<Fade1><h1 style={{color: 'white'}}> Do you have a rich imagination and love to read novels</h1></Fade1> */}
<Fade2><h1 style={{color: 'white'}}>Or Do you have the ability to write a wonderful scenario for different stories </h1></Fade2> 
<Fade3><h1 style={{color: 'white'}}>That's mean this website built for you..<em> Share your creativity here..</em> </h1></Fade3> 
<Fade4 class='link'>
 
  <Link to='/' class='link'> <em>Press here</em></Link>

</Fade4> 
<div class= 'aduio'>
<AudioPlayer
    autoPlay
    
    src="http://goldfirestudios.com/proj/howlerjs/sound.ogg"
 
  />
  </div>
 
    </div>     
     )
   }
   
 }

export default Welcome;
