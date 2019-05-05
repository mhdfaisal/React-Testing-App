import React from 'react';

class CommentBox extends React.Component{

    state = {comment:''}

    handleCommentBoxChange = (e)=>{
        this.setState({comment:e.target.value})
    }

    handleSubmit = (e)=>{
        e.preventDefault();

        this.setState({comment:''});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h4>Add a comment</h4>
                <textarea value={this.state.comment} onChange={(e)=> this.handleCommentBoxChange(e)}></textarea><br/>
                <button>Submit Comment</button>
            </form>
        )
    }
}

export default CommentBox;