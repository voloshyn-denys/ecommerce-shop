import Home from './Home';
import { connect } from "react-redux";
import { useEffect } from 'react';
import { getProducts } from '../../redux/productReduser';

const HomeContainer = (props) => {
  useEffect(() => {
    props.getProducts();
  }, []);

  return <Home products={props.products}/>
};

const mapSateToProps = (state) => {  
  return { 
    products: state.products.items
  }
};

export default connect(mapSateToProps, { getProducts })(HomeContainer);