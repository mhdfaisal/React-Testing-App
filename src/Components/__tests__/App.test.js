import App from '../App';
import React from 'react';
import CommentBox from '../CommentBox';
import {shallow} from 'enzyme';

it('shows a comment box', ()=>{
    const wrapped = shallow(<App />);

    expect(wrapped.find(CommentBox).length).toEqual(1);
    // **find() - will return all the instances that were found of the commentbox component in an array.
    
})




// it('shows a comment box', ()=>{
//     const div = document.createElement('div');
//     ReactDOM.render(<App />, div);
//     expect(div.innerHTML).toContain('Comment Box');
//     ReactDOM.unmountComponentAtNode(div);
// })