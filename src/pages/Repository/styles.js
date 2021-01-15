import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 10px;

  a{
    display:flex;
    align-items:center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;
  }
  a:hover{
    color: #666;
  }
  svg{
    margin-right: 3px;
  }
`;

export const  RepositoryInfo = styled.section`
  margin-top: 80px;

  header{
    display:flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 100px;

    img{
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div{
      margin-left: 24px;

      strong{
        font-size: 36px;
        color: #3d3d4d;
      }
      p{
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }
  ul{
    display: flex;
    list-style: none;
    margin-top: 5px;
    margin-left: 230px;

    li{
      strong{
        display: block;
        font-size: 30px;
        color:  #3d3d4d;
      }
      span{
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
  li + li{
        margin-left: 80px;
       }
`;

export const Issues = styled.div`
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