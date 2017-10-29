import { put, call, fork, takeEvery, all } from 'redux-saga/effects';
import CommentsApi from '../api/commentsApi';
import * as actionTypes from '../actions/actionTypes';

function* loadComments(){
    try {
        const comments = yield call(CommentsApi.getAllComments);
        yield put({type:actionTypes.LOAD_COMMENTS_SUCCESS, comments})
        
    } catch(e) {
        yield put({type:actionTypes.LOAD_COMMENTS_FAILED, e})
    }
}

function* watchLoadComments(){
    yield takeEvery(actionTypes.LOAD_COMMENTS_REQUEST, loadComments);
}

function* saveComment(action){
    try {
        const comment = yield call(CommentsApi.saveComment,action.payload);
        yield put({type: actionTypes.SAVE_COMMENT_SUCCESS, comment})
    } catch(e) {
        yield put({type: actionTypes.SAVE_COMMENT_FAILED, e})
    }
}

function* watchSaveComment(){
    yield takeEvery(actionTypes.SAVE_COMMENT_REQUEST, saveComment);
}

function* addComment(action){
    try {
        const comment = yield call(CommentsApi.addComment,action.payload);
        yield put({type: actionTypes.ADD_COMMENT_SUCCESS, comment})
    } catch(e) {
        yield put({type: actionTypes.ADD_COMMENT_FAILED, e})
    }
}

function* watchAddComment(){
    yield takeEvery(actionTypes.ADD_COMMENT_REQUEST, addComment);
}

function* deleteComment(action){
    try {
        const id = yield call(CommentsApi.deleteComment,action.payload);
        yield put({type: actionTypes.DELETE_COMMENT_SUCCESS, id})
    } catch(e) {
        yield put({type: actionTypes.DELETE_COMMENT_FAILED, e})
    }
}

function* watchDeleteComment(){
    yield takeEvery(actionTypes.DELETE_COMMENT_REQUEST, deleteComment);
}

export default function* rootSaga(){
    yield all([
        fork(watchLoadComments),
        fork(watchSaveComment),
        fork(watchAddComment),
        fork(watchDeleteComment)
    ]);
}

