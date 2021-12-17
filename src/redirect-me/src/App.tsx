import { 
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AddUrl from './pages/addUrl/AddUrl';

import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <AddUrl />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
