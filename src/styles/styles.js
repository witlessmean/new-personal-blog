import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';
import bg from './images/andre-benz-cXU6tNxhub0-unsplash.jpg'

export const GlobalStyle = createGlobalStyle`
html {
  font-family: 'Roboto', sans-serif;
  font-size: 62.5%;  
  box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
body{
  font-size: 1.6rem;
  margin: 0;
  width: 100%;
  background-color: #151515;
}`;


export const BgImg = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center; 
height: 100vh;
background-color: #151515;
&::before {
  content: '';
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-image: url(${bg});
  background-size: cover;
  background-position: top center;
  opacity: 0.50;

}
`

