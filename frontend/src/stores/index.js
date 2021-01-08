import productStore from './productStore';
import cartStore from './cartStore';
import userStore from './userStore';
import homeStore from './homeStore';

export default {
    productStore: new productStore(),
    cartStore: new cartStore(),
    userStore: new userStore(),
    homeStore: new homeStore()
}