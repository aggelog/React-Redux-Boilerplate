import { fromJS } from 'immutable';
import { SET_STATE } from '../actions/coreActions';

const INITIAL_STATE = fromJS({
    message: '@aggelog: Welcome to React Redux Boilerplate!'
});

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_STATE:
            return state.merge(action.state);
        default:
            return state;
    }
};
