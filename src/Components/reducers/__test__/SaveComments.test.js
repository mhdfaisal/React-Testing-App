import SaveComments from '../SaveComments';

it('handle\'s the action of type SAVE_COMMENTS', ()=>{

    const action = {type:"SAVE_COMMENTS", payload:"New comment"};
    const newState = SaveComments([],action);
    expect(newState).toEqual(['New comment']);
})

it('handles action with unknown type', ()=>{
    const newState = SaveComments([],{type:"abcv"});
    expect(newState).toEqual([]);
})