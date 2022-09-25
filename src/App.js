import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './routes';
import LocaleProvider from 'antd/lib/locale-provider';
import { LoadingProvider } from './contexts/loading.context';

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Router></Router>
        </LoadingProvider>
    </BrowserRouter>
  );
}

export default App;
