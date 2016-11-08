import React from 'react';
import { shallow } from 'enzyme';
import test from 'ava';
import { Provider } from 'react-redux';
import configureStore from '../../src/store/configureStore.js';

import NotFound from '../../src/pages/NotFound';

test('Page: - NotFound', t => {
    const { store } = configureStore();
    shallow(<Provider store={store}><NotFound/></Provider>);
    t.true(true);
});
