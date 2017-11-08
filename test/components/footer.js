import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import {expect} from 'chai';
import Footer from '../../src/components/footer';

configure({ adapter: new Adapter() });

describe("Footer Component", () => {
    let component
    beforeEach(() =>{
        component = shallow(<Footer/>);
        component.setProps({
            authed: true
        })
    });

    it('renders', () => {
        expect(component).to.be.a('object');
    })
})