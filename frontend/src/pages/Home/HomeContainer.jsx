import { useEffect } from 'react';
import Home from './Home';
import Loader from "../../components/Loader/Loader";
import {inject, observer} from 'mobx-react'

const HomeContainer = (props) => {
  const { getProducts, loadingMode, errorMode, products } = props.homeStore;

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (loadingMode) return <Loader />
  if (errorMode) return 'ERROR';

  return <Home products={products}/>
};

export default inject('homeStore')(observer(HomeContainer));