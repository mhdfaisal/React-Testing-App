import React from 'react';
import {connect} from 'react-redux';
class CommentList extends React.Component{

    renderCommentsList = ()=>{
       return this.props.comments.map((item,index)=>{
           return <li key={index}>{item}</li>
       })
    }

    render(){
        return(
            <ul>
                {this.renderCommentsList()}
            </ul>
        )
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {comments:state.comments}
}
export default connect(mapStateToProps)(CommentList);