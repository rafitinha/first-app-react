import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { repository } = useParams();

    return (
        <>
            <Header>
                <img src={logoImg} alt="GitHub Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img
                        src="https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=320&txt_altura=240&extensao=png&fundo_r=0.06274509803921569&fundo_g=0.996078431372549&fundo_b=0.9568627450980393&texto_r=0&texto_g=0&texto_b=0&texto=Gerador%20Imagem%20%234Devs&tamanho_fonte=10"
                        alt="RocketSeat"
                    />
                    <div>
                        <strong>rockeatseat/uom</strong>
                        <p>descricao do repositorio</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1212</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>45</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>Issues Abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to="adasda">
                    <div>
                        <strong>adasda</strong>
                        <p>adasda</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
};

export default Repository;
