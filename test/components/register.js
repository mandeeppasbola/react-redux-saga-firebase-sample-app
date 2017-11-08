import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import {expect} from 'chai';
import Register from '../../src/components/register';

configure({ adapter: new Adapter() });

describe("Register Component", () => {
    let component
    beforeEach(() =>{
        component = shallow(<Register/>);
    });

    it('renders', () => {
        expect(component).to.be.a('object');
    })
})