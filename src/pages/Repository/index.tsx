import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
    repository: string;
}

interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    };
}

interface Issue {
    title: string;
    id: number;
    html_url: string;
    user: {
        login: string;
    };
}

const Repository: React.FC = () => {
    const { repositoryParams, owner } = useParams();

    const [respository, setRespository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);

    useEffect(() => {
        api.get(`repos/${owner}/${repositoryParams}`).then(response => {
            setRespository(response.data);
        });
    }, [repositoryParams, owner]);

    useEffect(() => {
        api.get(`repos/${owner}/${repositoryParams}/issues`).then(response => {
            setIssues(response.data);
        });

        /*
        async function loadData(): Promise<void> {
            const repositories = await api.get(`repos/${owner}/${repository}`);
            const issues = await api.get(`repos/${owner}/${repository}/issues`);
        }

        loadData();
    */
        /*
        async function loadData(): Promise<void> {
            const [repositories, issues] = await Promise.all([
                api.get(`repos/${owner}/${repository}`),
                api.get(`repos/${owner}/${repository}/issues`),
            ]);
        }

        loadData();
      */
    }, [repositoryParams, owner]);

    return (
        <>
            <Header>
                <img src={logoImg} alt="GitHub Explorer" />
                <Link to="/dashboard">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>
            {respository ? (
                <RepositoryInfo>
                    <header>
                        <img
                            src={respository.owner.avatar_url}
                            alt={respository.owner.login}
                        />
                        <div>
                            <strong>{respository.full_name}</strong>
                            <p>{respository.description}</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>{respository.stargazers_count}</strong>
                            <span>Stars</span>
                        </li>
                        <li>
                            <strong>{respository.forks_count}</strong>
                            <span>Forks</span>
                        </li>
                        <li>
                            <strong>{respository.open_issues_count}</strong>
                            <span>Issues Abertas</span>
                        </li>
                    </ul>
                </RepositoryInfo>
            ) : (
                <p>Carregando...</p>
            )}

            <Issues>
                {issues.map(issue => (
                    <a key={issue.id} href={issue.html_url}>
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Issues>
        </>
    );
};

export default Repository;
