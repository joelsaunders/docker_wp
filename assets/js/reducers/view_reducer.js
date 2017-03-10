import {CURRENT_VIEW} from '../actions/index';

export default function (state=null, action) {
    switch (action.type) {
    case CURRENT_VIEW:
        return action.payload;
    default:
    return state
    }
}