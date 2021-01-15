import React, { useState, useEffect } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import {Header, RepositoryInfo, Issues} from './styles'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import {formatNumber} from '../../helpers/formatNumber.js'
import api from '../../services/api'

export default function Repository() {
  const [repository, setRepository] = useState(null);
  const [issues, setIssues] = useState([]);
  const { params } = useRouteMatch();// Usado para pegar os parametros

  useEffect( () => {
    const loadData = async () =>{
      /*
        Tecnica para realizar vairias promise(request) ao mesmo tempo,
        cria-se um array, onde cada indice é a resposta da promise.
      */
      const [responseRepository, responseIssues] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`),
      ]);
      setRepository(responseRepository.data);
      setIssues(responseIssues.data);
    }
    loadData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <Link to='/'>
          <FiChevronLeft size={16}/>
          Voltar
        </Link>
      </Header>

     {repository && (
        <RepositoryInfo>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{formatNumber(repository.stargazers_count)}</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>{formatNumber(repository.forks_count)}</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>{formatNumber(repository.open_issues_count)}</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>
     )}

      <Issues>
      {issues.map((issue) =>{
        return (
          <a key={issue.id} href={issue.html_url} >
          <div>
            <strong>{issue.title}</strong>
            <p>{issue.user.login}</p>
          </div>
        <FiChevronRight size={20} />
      </a>
        )
      })}
      </Issues>
    </>
  )
}
