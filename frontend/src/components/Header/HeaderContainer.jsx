import Header from './Header';
import { inject, observer } from "mobx-react";

const HeaderContainer = (props) => {
    return <Header 
        user={props.userStore.user} 
        cartCount={props.cartStore.products.length} 
        signout={props.userStore.signout} 
    />
}

export default inject('cartStore', 'userStore')(observer(HeaderContainer));