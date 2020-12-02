import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/HomeContainer';
import Product from './pages/Product/ProductContainer';
import CartContainer from './pages/Cart/CartContainer';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          <Switch>
            <Route path="/cart" component={ CartContainer } />
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
