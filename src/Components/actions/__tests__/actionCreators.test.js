import {saveComment} from '../index';

describe('Save comments', ()=>{

    it('has the correct type', ()=>{
        const action = saveComment('New Comment');
    
        expect(action.type).toEqual('SAVE_COMMENTS')
    })

    it('has the correct payload', ()=>{
        const action = saveComment('new comment');

        expect(action.payload).toEqual("new comment");
    })
})