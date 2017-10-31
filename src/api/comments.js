import withFirebase from '../firebase';

export const getAllComments = () => (
	withFirebase(({firebaseDb}) => (
		firebaseDb.child('/comments').once('value').then(
			(snap) => {
				let commentObj = snap.val();
				return Object.keys(commentObj).map(key => commentObj[key]);
			}
		)
	))	
)

export const deleteComment = (id) => (
	withFirebase(({firebaseDb}) => (
		firebaseDb.child('/comments/'+id).set(null).then(() => id)
	))	
)

export const saveComment = (comment) => (
	withFirebase(({firebaseDb}) => (
		firebaseDb.child('/comments/'+comment.id).set(comment).then(() => comment)
	))	
)

export const addComment = (comment) => {
	comment.id = Date.now();	
	return withFirebase(({firebaseDb}) => (
		firebaseDb.child('/comments/'+ comment.id).set(comment).then(() => comment)		
	))
}