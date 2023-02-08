import './App.css';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import ListAccountsComponent from './components/ListAccountsComponent';
import FooterComponent from './components/FooterComponent';
import ListBooksComponent from './components/ListBooks';
import LandingPageComponent from './components/LandingPageComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
          <div className='container'>
            <Switch>
              <Route path="/" exact component={LandingPageComponent}></Route>
              <Route path="/accounts" component={ListAccountsComponent}></Route>
              <Route path="/books" component={ListBooksComponent}></Route>
            </Switch>
          </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
