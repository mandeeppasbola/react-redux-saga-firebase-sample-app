import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import {expect} from 'chai';
import ResetPassword from '../../src/components/resetPassword';

configure({ adapter: new Adapter() });

describe("ResetPassword Component", () => {
    let component
    beforeEach(() =>{
        component = shallow(<ResetPassword/>);
    });

    it('renders', () => {
        expect(component).to.be.a('object');
    })
})