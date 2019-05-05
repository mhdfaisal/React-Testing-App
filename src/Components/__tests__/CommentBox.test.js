import React from 'react';
import CommentBox from '../CommentBox';
import {mount} from 'enzyme';

let wrapped;

beforeEach(()=>{
    wrapped = mount(<CommentBox />);
})

afterEach(()=>{
    wrapped.unmount();
})

it('shows a textarea and a button', ()=>{
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);

})

it('has a textarea that users can type in', ()=>{
    wrapped.find('textarea').simulate('change', {
        target:{
            value:'some text'
        }
    });

    expect(wrapped.find('textarea').prop('value')).toEqual('some text');
})

