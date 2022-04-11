import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes';
import GlobalStyke from './styles/global';

const App: React.FC = () => (
    <>
        <BrowserRouter>
            <Rotas />
        </BrowserRouter>
        <GlobalStyke />
    </>
);
export default App;
