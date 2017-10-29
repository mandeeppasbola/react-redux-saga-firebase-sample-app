import { fork, all } from 'redux-saga/effects';
import {watchLoadComments, watchSaveComment, watchAddComment, watchDeleteComment} from './comments';

export default function* rootSaga(){
    yield all([
        fork(watchLoadComments),
        fork(watchSaveComment),
        fork(watchAddComment),
        fork(watchDeleteComment)
    ]);
}

