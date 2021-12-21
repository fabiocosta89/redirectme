import { 
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AddUrl from './pages/addUrl/AddUrl';
import RedirectPage from './pages/redirect/RedirectPage';

import './App.scss';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <AddUrl />
        </Route>
        <Route path="/not-found">
          <NotFound />
        </Route>
        <Route path="/:id">
          <RedirectPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
