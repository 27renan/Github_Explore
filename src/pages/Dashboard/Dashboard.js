import React, { useState } from 'react'
import { Title, Form, Repositories, Error } from './styles'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'

export default function Dashboard() {
  const [newRepo, setNewRepo] = useState('')
  const [inputError, setInputError] = useState('')
  const [repositories, setRepositories] = useState([]);

  // Monitora o input da aplicação
  const handleNewRepo = (event) => {
    setNewRepo(event.target.value)
  }

  // Função para lidar com o submit do formulario
  const handleAddRepository = async (event) => {
    event.preventDefault();

    if(!newRepo){
      setInputError('Digite o autor/nome do repositório!!!');
      return
    }

    try {
      const response = await api.get(`repos/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo(''); // Limpa o input ao recarregar a pagina
      setInputError('') // Tira o inputError da tela.
      
    } catch (error) {
      setInputError('Erro na busca por esse repositório!!!')
    }
  }

  return (
    <>
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input 
          type="text" 
          placeholder="Digite o nome do repositório" 
          onChange = {handleNewRepo}
          value={newRepo} />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error> {inputError} </Error>}
      
      <Repositories>
        {repositories.map((repository) =>{
          return(
            <Link key={repository.full_name} to={`/repositories/${repository.full_name}`} >
              <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
              <div>
               <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
            <FiChevronRight size={20} />
          </Link>
          )
        })}
      </Repositories>
    </>
  )
}
