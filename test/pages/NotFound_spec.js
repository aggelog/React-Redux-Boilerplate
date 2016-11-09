import React from 'react';
import { mount } from 'enzyme';
import test from 'ava';
import { Provider } from 'react-redux';
import sinon from 'sinon';
import { browserHistory } from 'react-router';
import configureStore from '../../src/store/configureStore.js';

import NotFound from '../../src/pages/NotFound';

test('Page: - NotFound', t => {
    const stub = sinon.stub(browserHistory, 'push');
    const { store } = configureStore();
    mount(<Provider store={store}><NotFound/></Provider>);
    t.true(stub.calledWith('/'));
});
