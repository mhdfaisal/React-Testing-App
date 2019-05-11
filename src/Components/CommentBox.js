import React from 'react';
import {connect} from 'react-redux';
import {saveComment, fetchComments} from './actions/index';

class CommentBox extends React.Component{

    state = {comment:''}

    handleCommentBoxChange = (e)=>{
        this.setState({comment:e.target.value})
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({comment:''});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <h4>Add a comment</h4>
                <textarea value={this.state.comment} onChange={(e)=> this.handleCommentBoxChange(e)}></textarea><br/>
                <button>Submit Comment</button>
                </form>
                <button onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps)=>{
    return {comments: state.comments};
}

export default connect(mapStateToProps, {saveComment,fetchComments})(CommentBox);