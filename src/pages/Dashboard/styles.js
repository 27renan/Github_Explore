import styled, { css } from 'styled-components'
import { shade } from 'polished'

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  display: flex;
  justify-content: center;
  margin-top: 20px
`;

export const Form = styled.form`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  
  input{
    width: 600px;
    height: 40px;
    border: 0;
    border-radius: 5px 0px 0px 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) => props.hasError && css`
    border-color:  #c53030;
    `}
  }

  button{
    width: 90px;
    height: 40px;
    border-radius: 0px 5px 5px 0px;
    background: #04d361;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
  }

  input::placeholder{
    color: #a8a8b3
  }
  
  button:hover {
    background: ${shade(0.2, '#04d361')}
  }
`;

export const Repositories = styled.div`
  margin-top: 30px;
 
  a{
    background: #fff;
    border-radius: 5px;
    padding: 15px;
    text-decoration: none;
    margin: 0 200px;
    
    display: flex;
    align-items: center;
    transition: transform 0.2s;
  }
  // A partir do primeiro elementos da lista aplica uma margin
  a + a{
    margin-top: 16px;
  }
  // Animação
  a:hover{
    transform: translateX(10px)
  }
  img{
    width: 64px;
    height: 64px;
    border-radius: 50% //Faz a imagem ficar arredondada
  }
  div{
    margin-left: 16px;
    flex: 1;
    strong{
      font-size: 20px;
      color: #3D3D4D
    }
    p{
      font-size: 18px;
      color: #A8A8B3;
      margin-top: 4px; 
    }
  }
  //Icon (setinha)
  svg{
    margin-left: auto;
    color: #cbcbd6
  }
`;

export const Error = styled.span`
  display: flex;
  justify-content: center;
  color: #c53030;
  margin-top: 8px;
`;