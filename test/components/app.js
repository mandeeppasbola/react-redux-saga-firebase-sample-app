import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import {expect} from 'chai';
import App from '../../src/components/app';
import Header from '../../src/components/header';
import Footer from '../../src/components/footer';

configure({ adapter: new Adapter() });

describe("App Component", () => {
    let component
    beforeEach(() =>{
        component = shallow(<App/>);
        component.setState({
            loading: true
        })
    });

    it('renders', () => {
        expect(component).to.be.a('object');
    })
    it('renders loading if authentication is in process', () => {
        expect(component.find(Header)).to.have.length(0);
        expect(component.find(Footer)).to.have.length(0);
    })
    it('renders content after authentication is checked', () => {
        component.setState({
            loading: false
        })
        expect(component.find(Header)).to.have.length(1);
        expect(component.find(Footer)).to.have.length(1);
    })
})