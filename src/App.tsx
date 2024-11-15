// src/App.tsx

import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/Router';

const App: React.FC = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default App;
