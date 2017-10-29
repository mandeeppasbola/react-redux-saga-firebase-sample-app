import React from 'react';

import AddCommentContainer from '../container/add-comment';
import CommentListContainer from '../container/comment-list';
import Login from '../components/login';

const CommentManager = () => (
	<div>	
		<AddCommentContainer/>
		<CommentListContainer/>
	</div>
)

export default CommentManager;
