const saveComment = (comment)=>{
    return {type:'SAVE_COMMENTS', payload:comment}
}

export {saveComment};