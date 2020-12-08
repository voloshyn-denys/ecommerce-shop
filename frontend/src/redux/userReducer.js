import { userAPI } from "../api/api";

const USER_SUCCESS = 'USER_SUCCESS';
const USER_SIGNOUT = 'USER_SIGNOUT';

const storagedUser = localStorage.getItem('user');
const initialState = {
    user: storagedUser
        ? JSON.parse(storagedUser)
        : null
};

const userReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case USER_SUCCESS:
            return { 
                ...state, 
                user: action.user
            }
        case USER_SIGNOUT:
            return { 
                ...state, 
                user: null
            }
    
        default:
            return state;
    }
};

const userSuccess = (user) => ({ type: USER_SUCCESS, user });
const userSingout = () => ({ type: USER_SIGNOUT });

export const signin = (email, password) => async (dispatch) => {
    const user = await userAPI.fetchUser(email, password);
    dispatch(userSuccess(user));
    localStorage.setItem('user', JSON.stringify(user));
};

export const signout = () => (dispatch) => {
    dispatch(userSingout());
    localStorage.removeItem('user');
};

export const register = ({email, password, name}) => async (dispatch) => {
    const user = await userAPI.register({email, password, name});
    dispatch(userSuccess(user));
    localStorage.setItem('user', JSON.stringify(user));
};

export default userReducer;