import React from 'react';
import CommentList from '../CommentList';
import {mount} from 'enzyme';
import Root from '../../Root';

let wrapped;

beforeEach(()=>{
    const intialState = {comments:["comment1", "comment2"]};
    wrapped = mount(<Root initialState={intialState}><CommentList /></Root>);
})

it('shows one li per comment', ()=>{
    expect(wrapped.find('li').length).toEqual(2);
})

it('shows the text for each comment', ()=>{
    expect(wrapped.render().text()).toContain('comment1');
    expect(wrapped.render().text()).toContain('comment2');
})