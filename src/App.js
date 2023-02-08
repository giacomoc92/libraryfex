import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ListAccountsComponent from './components/ListAccountsComponent';

function App() {
  return (
    <div>
      <div className='container'>
        <ListAccountsComponent />
      </div>
    </div>
  );
}

export default App;
