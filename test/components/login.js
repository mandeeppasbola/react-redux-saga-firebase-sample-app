import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import {expect} from 'chai';
import Login from '../../src/components/login';

configure({ adapter: new Adapter() });

describe("Login Component", () => {
    let component
    beforeEach(() =>{
        component = shallow(<Login/>);
    });

    it('renders', () => {
        expect(component).to.be.a('object');
    })
})