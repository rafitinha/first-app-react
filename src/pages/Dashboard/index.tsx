import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

export const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>
            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisa</button>
            </Form>
            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/11011662?v=4"
                        alt="Rafael Cruz"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>
                            Easy peasy highly scalable ReactJS & React Native
                            forms!
                        </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/11011662?v=4"
                        alt="Rafael Cruz"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>
                            Easy peasy highly scalable ReactJS & React Native
                            forms!
                        </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/11011662?v=4"
                        alt="Rafael Cruz"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>
                            Easy peasy highly scalable ReactJS & React Native
                            forms!
                        </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/11011662?v=4"
                        alt="Rafael Cruz"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>
                            Easy peasy highly scalable ReactJS & React Native
                            forms!
                        </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
