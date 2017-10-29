import * as actionTypes from './actionTypes'

export const loadComments = () => {
	return {
		type: actionTypes.LOAD_COMMENTS_REQUEST
	}
}

export const saveComment = (id, title, desc) => {
	return {
		type: actionTypes.SAVE_COMMENT_REQUEST,
		payload: {id,title,desc} 
	}
}


export const addComment = (title, desc) => {
	return {
		type: actionTypes.ADD_COMMENT_REQUEST,
		payload: {title,desc}
	}
}

export const deleteComment = (id) => {
	return {
		type: actionTypes.DELETE_COMMENT_REQUEST,
		payload: id
	}
}