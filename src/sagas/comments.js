import { put, call, takeEvery} from 'redux-saga/effects';
import {getAllComments, saveComment, deleteComment, addComment} from '../api/';
import * as actionTypes from '../actions/types';

function* loadCommentsSaga(){
    try {
        const comments = yield call(getAllComments);
        yield put({type:actionTypes.LOAD_COMMENTS_SUCCESS, comments})
        
    } catch(e) {
        yield put({type:actionTypes.LOAD_COMMENTS_FAILED, e})
    }
}

export function* watchLoadComments(){
    yield takeEvery(actionTypes.LOAD_COMMENTS_REQUEST, loadCommentsSaga);
}

function* saveCommentSaga(action){
    try {
        const comment = yield call(saveComment,action.payload);
        yield put({type: actionTypes.SAVE_COMMENT_SUCCESS, comment})
    } catch(e) {
        yield put({type: actionTypes.SAVE_COMMENT_FAILED, e})
    }
}

export function* watchSaveComment(){
    yield takeEvery(actionTypes.SAVE_COMMENT_REQUEST, saveCommentSaga);
}

function* addCommentSaga(action){
    try {
        const comment = yield call(addComment,action.payload);
        yield put({type: actionTypes.ADD_COMMENT_SUCCESS, comment})
    } catch(e) {
        yield put({type: actionTypes.ADD_COMMENT_FAILED, e})
    }
}

export function* watchAddComment(){
    yield takeEvery(actionTypes.ADD_COMMENT_REQUEST, addCommentSaga);
}

function* deleteCommentSaga(action){
    try {
        const id = yield call(deleteComment,action.payload);
        yield put({type: actionTypes.DELETE_COMMENT_SUCCESS, id})
    } catch(e) {
        yield put({type: actionTypes.DELETE_COMMENT_FAILED, e})
    }
}

export function* watchDeleteComment(){
    yield takeEvery(actionTypes.DELETE_COMMENT_REQUEST, deleteCommentSaga);
}