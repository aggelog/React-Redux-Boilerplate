import { fromJS } from 'immutable';
import test from 'ava';
import coreReducer from '../../src/reducers/coreReducer';
import setState from '../../src/actions/coreActions';


const initialState = fromJS({
    message: 'Welcome to React Redux Boilerplate!!'
});

test('initialization of the state', t => {
    const nextState = coreReducer(undefined, { type: '' });

    t.true(nextState.equals(initialState));
});

test('handles SET_STATE', t => {
    const nextState = coreReducer(initialState, setState(
        { message: 'Welcome to React Redux Boilerplate TEST!!' }
    ));

    t.true(nextState.equals(
        fromJS({
            message: 'Welcome to React Redux Boilerplate TEST!!'
        })
    ));
});

test('handles Default state', t => {
    const action = {
        type: 'SOME_UNDEFINED_ACTION',
        test: 'data'
    };

    const nextState = coreReducer(initialState, action);

    t.true(nextState.equals(initialState));
});
