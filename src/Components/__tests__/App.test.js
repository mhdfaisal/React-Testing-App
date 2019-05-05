import App from '../App';
import React from 'react';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';
import {shallow} from 'enzyme';

let wrapped;

beforeEach(()=>{
     wrapped = shallow(<App />)
});

it('shows a comment box', ()=>{

    expect(wrapped.find(CommentBox).length).toEqual(1);
    // **find() - will return all the instances that were found of the commentbox component in an array.
    
})

it('shows a comment list', ()=>{
    expect(wrapped.find(CommentList).length).toEqual(1)
})




// it('shows a comment box', ()=>{
//     const div = document.createElement('div');
//     ReactDOM.render(<App />, div);
//     expect(div.innerHTML).toContain('Comment Box');
//     ReactDOM.unmountComponentAtNode(div);
// })