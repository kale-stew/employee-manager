import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: '',
    user: null,
    error: '',
    loading: null 
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            return { 
                ...state, 
                email: action.payload 
            };
        case PASSWORD_CHANGED:
            return { 
                ...state, 
                password: action.payload 
            };
        case LOGIN_USER:
            return { 
                ...state, 
                error: '', 
                loading: true
            };
        case LOGIN_USER_SUCCESS:
            return { 
                ...state, 
                user: action.payload, 
                error: '', 
                loading: false 
        };
        case LOGIN_USER_FAIL:
            return { 
                ...state, 
                password: '',
                error: 'Authentication failed.', 
                loading: false 
        };
        default: 
            return state;
    }
};