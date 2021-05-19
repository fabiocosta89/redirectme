import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { 
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
