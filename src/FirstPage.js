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

import StarfieldAnimation from 'react-starfield-animation'
import './FirstPage.css';


const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
const BounceIn = styled.div`animation: 2s ${keyframes`${bounceIn}`}infinite`;
// const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`} infinite`;
const Pulse = styled.div`animation: 2s ${keyframes`${pulse}`} infinite`;



class FirstPage extends Component {
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
    <div class='g'style={{color: 'black'}}>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph
    Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph</div>
   <div class='m'> 
 {/* <Fade><h1 class='h'style={{color: 'white'}}>Hello </h1></Fade>
 <Fade><h1 class='h'style={{color: 'white'}}>hiiii </h1></Fade> */}
 {/* <FadeIn class='h'style={{color: 'white'}}>yyyy</FadeIn> */}
 {/* <Pulse>
 <a class ='button' href="/"style={{color: 'white'}}>go to home page</a>
 </Pulse> */}
 {/* <a href="/"style={{color: 'white'}}>go to home page</a> */}
{/* 
 Do you like reading novels or Do you have the ability to write a wonderful scenario for different stories that's mean this website built for you Share your creativity now <Bounce></Bounce>
<Fade><h1 class='h'style={{color: 'white'}}>xxxx </h1></Fade> */} */}
<Fade1><h1 style={{color: 'white'}}> Do you have a fertile imagination and love to read novels</h1></Fade1> */}
<Fade2><h1 style={{color: 'white'}}>or Do you have the ability to write a wonderful scenario for different stories </h1></Fade2> 
<Fade3><h1 style={{color: 'white'}}>that's mean this website built for you..<em> Share your creativity now..</em> </h1></Fade3> 
<Fade4>
<a class='button'href="/"style={{color: 'white'}}> <em>Press here</em></a> 
</Fade4> 

 
    </div>     </div>
     )
   }
   
 }

export default FirstPage;
