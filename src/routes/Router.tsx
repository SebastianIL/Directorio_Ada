// src/AppRouter.tsx

import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './Constants';
import HomePage from '../pages/HomePage';  // Adjust the import paths as needed
import Directory from '../pages/Directory';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.DIRECTORY} element={<Directory />} />
    </Routes>
  );
};

export default AppRouter;
