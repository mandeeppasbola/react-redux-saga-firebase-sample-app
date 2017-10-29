import {database} from '../firebase';

export const getAllComments = () => (
	database.child('/comments').once('value').then(
		(snap) => {
			let commentObj = snap.val();
			return Object.keys(commentObj).map(key => commentObj[key]);
		}
	)
)

export const deleteComment = (id) => (
	database.child('/comments/'+id).set(null).then(() => id)
)

export const saveComment = (comment) => (
	database.child('/comments/'+comment.id).set(comment).then(() => comment)
)

export const addComment = (comment) => {
	comment.id = Date.now();
	return database.child('/comments/'+ comment.id).set(comment).then(() => comment);		
}