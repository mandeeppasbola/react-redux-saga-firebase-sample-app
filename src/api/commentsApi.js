import {database} from '../firebase';

class CommentsApi {
	static getAllComments() {
		return database.child('/comments').once('value').then(
			(snap) => {
				let commentObj = snap.val();
				return Object.keys(commentObj).map(key => commentObj[key]);
			}
		);
	}
	
	static deleteComment(id) {
		return database.child('/comments/'+id).set(null).then(() => id);
	}
	
	static saveComment(comment) {
		return database.child('/comments/'+comment.id).set(comment).then(() => comment);
	}
	
	static addComment(comment) {
		comment.id = Date.now();
		return database.child('/comments/'+ comment.id).set(comment).then(() => comment);		
	}
}

export default CommentsApi;