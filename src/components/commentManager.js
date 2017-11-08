import React from 'react';

import AddCommentContainer from '../container/addComment';
import CommentListContainer from '../container/commentList';
import Login from '../components/login';

const CommentManager = () => (
	<div>	
		<AddCommentContainer/>
		<CommentListContainer/>
	</div>
)

export default CommentManager;
