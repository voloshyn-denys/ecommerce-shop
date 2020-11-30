import { connect } from "react-redux";
import { useEffect } from 'react';
import { getProducts } from '../../redux/homeReduser';
import Home from './Home';

const HomeContainer = (props) => {
  useEffect(() => {
    props.getProducts();
  }, []);

  return <Home products={props.products}/>
};

const mapSateToProps = (state) => {  
  return { 
    products: state.home.products
  }
};

export default connect(mapSateToProps, { getProducts })(HomeContainer);