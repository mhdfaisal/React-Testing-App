import React from 'react';
import CommentBox from '../CommentBox';
import {mount} from 'enzyme';
import Root from '../../Root';

let wrapped;

beforeEach(()=>{
    wrapped = mount(<Root><CommentBox /></Root>);
})

afterEach(()=>{
    wrapped.unmount();
})

it('shows a textarea and a button', ()=>{
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);

})

describe('the text area', ()=>{
    beforeEach(()=>{
        wrapped.find('textarea').simulate('change', {
            target:{
                value:'some text'
            }
        });
    
        wrapped.update();
    })

    it('has a textarea that users can type in', ()=>{
    expect(wrapped.find('textarea').prop('value')).toEqual('some text');
    })
    
    it('when form gets submitted, textarea get emptied', ()=>{
    
        wrapped.find('form').simulate('submit');
        wrapped.update();
    
        expect(wrapped.find('textarea').prop('value')).toEqual("");
    })
})


