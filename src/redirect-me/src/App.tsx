import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AddUrl from './pages/addUrl/AddUrl';
import RedirectPage from './pages/redirect/RedirectPage';

import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <AddUrl />
        </Route>
        <Route path="/:id">
          <RedirectPage />
        </Route>
        {/* <Redirect to="/" /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
