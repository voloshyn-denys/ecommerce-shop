import { action, makeObservable, observable } from "mobx";
import { userAPI } from "../api/api";

export default class userStore {
    storagedUser = localStorage.getItem('user');

    user = this.storagedUser
        ? JSON.parse(this.storagedUser)
        : null
    
    constructor(){
        makeObservable(this, {
            user: observable,
            userSuccess: action,
            userSingout: action
        })
    }

    userSuccess = (user) => {
        this.user = user
    }
    userSingout = () => {
        this.user = null
    }

    signin = async(email, password) => {
        const user = await userAPI.fetchUser(email, password);
        this.userSuccess(user);
        localStorage.setItem('user', JSON.stringify(user));
    };
    
    signout = () => {
        this.userSingout();
        localStorage.removeItem('user');
    };
    
    register = async({email, password, name}) => {
        const user = await userAPI.register({email, password, name});
        this.userSuccess(user);
        localStorage.setItem('user', JSON.stringify(user));
    };
}