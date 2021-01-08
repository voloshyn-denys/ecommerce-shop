import { useEffect } from 'react';
import Home from './Home';
import Loader from "../../components/Loader/Loader";
import homeStore from "../../stores/homeStore";
import {observer} from 'mobx-react'

const store = new homeStore();

const HomeContainer = () => {
  const { getProducts, loadingMode, errorMode, products } = store;

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (loadingMode) return <Loader />
  if (errorMode) return 'ERROR';

  return <Home products={products}/>
};

export default observer(HomeContainer);