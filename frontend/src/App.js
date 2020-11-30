import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/HomeContainer';
import Product from './pages/Product/ProductContainer';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/product/:id" component={ Product } />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
