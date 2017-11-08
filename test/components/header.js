import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import {expect} from 'chai';
import Header from '../../src/components/header';

configure({ adapter: new Adapter() });

describe("Header Component", () => {
    let component
    beforeEach(() =>{
        component = shallow(<Header/>);
        component.setProps({
            authed: true
        })
    });

    it('renders', () => {
        expect(component).to.be.a('object');
    })
    it('renders logout button when authed', () => {
        expect(component.find('button')).to.have.length(1);
    })
})