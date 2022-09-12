import './app.css';
import Login from './components/login/login';
import Auth from './components/login/login';

function App({ authService }) {
  return (
    <>
      <h1>Hello :)</h1>
      <Login authService={authService} />
    </>
  );
}

export default App;
