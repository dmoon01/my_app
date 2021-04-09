import { SIGN_UP } from '../Constants/ActionTypes';

const initialState = {
    id :'',
    pw :'',
    email : '',
    phoneNumber : '',
    allowAd : '',
    joinTime : '',
    name : ''
}

const form = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_UP:
            return {
                ...state,
                id : action.id,
                pw : action.pw,
                name : action.name,
                phoneNumber :action.phoneNumber,
                allowAd : action.allowAd,
                email : action.email,
                joinTime : action.joinTime
            };
        default:
            return state;
    }
}

export default form;
