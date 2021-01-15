import {createGlobalStyle} from 'styled-components'
import GithubBackground from '../assets/git.png'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #F0F0F5 url(${GithubBackground}) no-repeat 100% top;
  }

  body, input, button {
    font: 16px;
    font-family: 'Roboto', sans-serif;
  }

  button{
    cursor: pointer;
  }
`;