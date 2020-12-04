import { connect } from "react-redux";
import { useEffect } from 'react';
import { getProducts } from '../../redux/homeReduser';
import Home from './Home';
import Loader from "../../components/Loader/Loader";

const HomeContainer = (props) => {
  const { getProducts } = props;
  
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (props.loadingMode) return <Loader />
  if (props.errorMode) return 'ERROR';
  return <Home products={props.products}/>
};

const mapSateToProps = (state) => {  
  return { 
    products: state.home.products,
    loadingMode: state.home.loadingMode,
    errorMode: state.home.errorMode
  }
};

export default connect(mapSateToProps, { getProducts })(HomeContainer);