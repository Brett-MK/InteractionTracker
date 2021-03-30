import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render((
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
