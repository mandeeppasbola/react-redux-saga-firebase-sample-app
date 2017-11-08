import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import {expect, should} from 'chai';
import {comments} from '../../src/reducers/comments';

configure({ adapter: new Adapter() });

describe("Comments Reducer ", () => {    

    it('handles default', () => {
        const initialState = {
            comments: []
        }
        const actionObj = {
            type: ''
        };
        const newState = comments(initialState, actionObj);
        expect(newState).to.eql({
            comments: []
        });
    });

    it('handles LOAD_COMMENTS_SUCCESS', () => {
        const initialState = {
            comments: []
        }
        const actionObj = {
            type: 'LOAD_COMMENTS_SUCCESS',
            payload : [
                {
                    id: 1,
                    title: 'title',
                    desc: 'desc'
                }
            ]
        };
        const newState = comments(initialState, actionObj);
        expect(newState).to.eql({
            comments: [{
                id: 1,
                title: 'title',
                desc: 'desc'
            }]
        });
    });

    it('handles DELETE_COMMENT_SUCCESS', () => {
        const initialState = {
            comments : [
                {
                    id: 1,
                    title: 'title',
                    desc: 'desc'
                }
            ]
        }
        const actionObj = {
            type: 'DELETE_COMMENT_SUCCESS',
            payload : 1
        };
        const newState = comments(initialState, actionObj);
        expect(newState).to.eql({
            comments: []
        });
    });

    it('handles ADD_COMMENT_SUCCESS', () => {
        const initialState = {
            comments : []
        }
        const actionObj = {
            type: 'ADD_COMMENT_SUCCESS',
            payload : {
                id: 1,
                title: 'title',
                desc: 'desc'
            }
        };
        const newState = comments(initialState, actionObj);
        expect(newState).to.eql({
            comments: [{
                id: 1,
                title: 'title',
                desc: 'desc'
            }]
        });
    });

    it('handles SAVE_COMMENT_SUCCESS', () => {
        const initialState = {
            comments : [{
                id: 1,
                title: 'title',
                desc: 'desc'
            }]
        }
        const actionObj = {
            type: 'SAVE_COMMENT_SUCCESS',
            payload : {
                id: 1,
                title: 'title update',
                desc: 'desc updated'
            }
        };
        const newState = comments(initialState, actionObj);
        expect(newState).to.eql({
            comments: [{
                id: 1,
                title: 'title update',
                desc: 'desc updated'
            }]
        });
    });

})