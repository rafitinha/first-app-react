import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Rotas: React.FC = () => (
    <Routes>
        <Route path="/first-app-react" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route
            path="/repository/:owner/:repositoryParams"
            element={<Repository />}
        />
    </Routes>
);

export default Rotas;
