import React from 'react';
import { shallow } from 'enzyme';
import test from 'ava';
import { Provider } from 'react-redux';
import configureStore from '../../src/store/configureStore.js';

import WelcomePage from '../../src/pages/Welcome';

test('Page: - Welcome', t => {
    const { store } = configureStore();
    shallow(<Provider store={store}><WelcomePage/></Provider>);
    t.true(true);
});
