import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './App';
import { ShipmentsProvider } from './lib/context/companiesContext';

import './assets/styles/index.scss';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <ShipmentsProvider>
    <Router>
      <App />
    </Router>
  </ShipmentsProvider>,
);
