
import Header from './Header/Header';
import Home from './Home/Home';
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
            <Route exact path="/" component={Home} />
            <Route path="/product/:productId" component={Product} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
