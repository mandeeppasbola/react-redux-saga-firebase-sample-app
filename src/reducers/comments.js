import * as actionTypes from '../actions/types'
import initialState from './initialState'

export const comments = (state = initialState, action) => {
    switch(action.type){
        
        case actionTypes.LOAD_COMMENTS_SUCCESS:
            return Object.assign({}, state, {comments: action.payload})

        case actionTypes.DELETE_COMMENT_SUCCESS:
            return Object.assign({}, state, {comments: state.comments.filter((comment) => (
                comment.id !==  action.payload
            ))})

        case actionTypes.ADD_COMMENT_SUCCESS:
            return Object.assign({}, state, {comments: [...state.comments,action.payload]} )

        case actionTypes.SAVE_COMMENT_SUCCESS: 
            return Object.assign({}, state, {comments: state.comments.map((comment, i) => {
                if(comment.id === action.payload.id){
                    return action.payload
                } else {
                    return comment
                }
            })} )   

        default:
            return state
    }
}