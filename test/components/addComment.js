import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import {expect, should, assert} from 'chai';
import {spy} from 'sinon';
import AddComment from '../../src/components/addComment';

configure({ adapter: new Adapter() });

describe("Comment Component ", () => {
    let component, componentProps;
    beforeEach(() =>{
        componentProps = {
            addCommentAction : spy()           
        }
        component = mount(<AddComment {...componentProps}/>);
    });

    it('renders', () => {
        expect(component).to.be.a('object');
    });

})