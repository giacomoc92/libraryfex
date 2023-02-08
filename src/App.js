import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import ListAccountsComponent from './components/ListAccountsComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
        <div className='container'>
          <ListAccountsComponent />
        </div>
    </div>
  );
}

export default App;
