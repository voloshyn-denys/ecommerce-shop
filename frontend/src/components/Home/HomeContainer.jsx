import Home from './Home';
import { connect } from "react-redux";

const mapSateToProps = (state) => {  
    return { 
      products: state.products.items
    }
  }

export default connect(mapSateToProps)(Home);