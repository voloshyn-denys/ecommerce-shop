
import Header from './Header/Header';
import HomeContainer from './Home/HomeContainer';
import Footer from './Footer/Footer';
import Product from './Product/Product';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/" component={ HomeContainer } />
            <Route path="/product/:productId" component={ Product } />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
