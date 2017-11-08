import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import {expect, should} from 'chai';
import configureStore from 'redux-mock-store';
import AddCommentContainer from '../../src/container/addComment';
import AddComment from '../../src/components/addComment';

configure({ adapter: new Adapter() });
const mockStore = configureStore();

describe("CommentList Redux Container ", () => {
    let state, store, component
    beforeEach(() =>{
        state = {
            comments: []
        }
        store = mockStore(state);
        component = shallow(<AddCommentContainer store={store}/>);
    });

    it('renders', () => {
        expect(component).to.be.a('object');
    });

    it('renders add comment component with props : addCommentAction action', () => {
        expect(component.dive().find(AddComment).props().addCommentAction).to.exist;  
    });
})