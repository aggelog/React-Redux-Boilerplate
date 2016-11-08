export const SET_STATE = 'SET_STATE';

export default function setState(state) {
    return {
        type: SET_STATE,
        state
    };
}
