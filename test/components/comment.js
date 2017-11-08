import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import {expect, should, assert} from 'chai';
import {spy} from 'sinon';
import Comment from '../../src/components/comment';

configure({ adapter: new Adapter() });

describe("Comment Component ", () => {
    let component, componentProps;
    beforeEach(() =>{
        componentProps = {
            comment : {
                id:1,
                title: "title 1",
                desc: "Desc 1"
            },
            actions : {
                deleteComment: spy(),
                saveComment: spy(),
            }            
        }
        component = shallow(<Comment {...componentProps}/>);
        component.setState({
            isEditing : false
        })
    });

    it('renders', () => {
        expect(component).to.be.a('object');
    });

    it('Action saveComment is called on save button click', () => {   
        component.setState({
            isEditing : true
        })
        let saveButton = component.find('.btn-save');
        expect(saveButton).to.have.length(1);
        saveButton.simulate('click');
        assert.ok(componentProps.actions.saveComment.calledOnce);
    });

    it('Action deleteComment is called on delete button click', () => {   
        let deleteButton = component.find('.btn-delete');
        expect(deleteButton).to.have.length(1);
        deleteButton.simulate('click');
        assert.ok(componentProps.actions.deleteComment.calledOnce);
    });

})