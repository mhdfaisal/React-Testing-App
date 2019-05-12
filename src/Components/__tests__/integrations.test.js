import React from 'react';
import App from '../App';
import Root from '../../Root';
import {mount} from 'enzyme';
import moxios from 'moxios';

beforeEach(()=>{
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/posts', {
        status:"200",
        response:[{comment:"Comments 1"}, {comment:"Comments 2"}]
    });
})

afterEach(()=>{
    moxios.uninstall();
})

it('can fetch a list of comments and display them', (done)=>{
    let wrapped = mount(<Root><App /></Root>);
    wrapped.find('.fetch-button').simulate('click');

    moxios.wait(()=>{
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount();
    })
})

