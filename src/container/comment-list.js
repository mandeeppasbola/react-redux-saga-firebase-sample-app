import React from 'react';

import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Comment from '../components/comment';
import {saveComment, deleteComment} from '../actions/commentActions';

const CommentListContainer = ({comments, actions}) => (
    <div className="comments">
    {
        comments.map((comment, i) => (
            <Comment comment={comment} actions={actions} key={comment.id}/>
        ))
    }			
    </div>
)

const mapStateToProps = (state) => (
    {
        comments: state.comments
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators({saveComment, deleteComment}, dispatch)
    }
)

CommentListContainer.propTypes = {
    comments: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer);