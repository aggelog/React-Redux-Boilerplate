import React from 'react';
import { mount, shallow } from 'enzyme';
import test from 'ava';
import { Provider } from 'react-redux';
import configureStore from '../../src/store/configureStore.js';
import setState from '../../src/actions/coreActions';

import WelcomePage from '../../src/pages/Welcome';

test('Page: - Welcome', t => {
    const { store } = configureStore();
    store.dispatch(setState());

    const welcomeP = mount(<Provider store={store}><WelcomePage/></Provider>);

    t.true(welcomeP.find('h1').text() === '@aggelog: Welcome to React Redux Boilerplate!');
});
