import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import {expect, should} from 'chai';
import configureStore from 'redux-mock-store';
import CommentListContainer from '../../src/container/commentList';
import Comment from '../../src/components/comment';

configure({ adapter: new Adapter() });
const mockStore = configureStore();

describe("CommentList Redux Container ", () => {
    let state, store, component
    beforeEach(() =>{
        state = {
            comments:{
                comments: [{
                    id: 1,
                    title: "Title 1",
                    desc: "Desc 1"
                }]
            }
        }
        store = mockStore(state);
        component = shallow(<CommentListContainer store={store}/>);
    });

    it('renders', () => {
        expect(component).to.be.a('object');
    });

    it('renders comment component with props : comment and actions', () => {
        expect(component.dive().find(Comment).props().comment).to.exist;   
        expect(component.dive().find(Comment).props().actions.saveComment).to.exist;   
        expect(component.dive().find(Comment).props().actions.deleteComment).to.exist;    
    });
})