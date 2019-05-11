import axios from 'axios';

const saveComment = (comment)=>{
    return {type:'SAVE_COMMENTS', payload:comment}
}

const fetchComments = ()=>{
    return async (dispatch, getState)=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        dispatch({type:"FETCH_COMMENTS", payload:response.data});
    }
}

export {saveComment, fetchComments};