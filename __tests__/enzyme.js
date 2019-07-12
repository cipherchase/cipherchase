import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

import MainContainer from '../src/containers/MainContainer';


describe('Unit Test for Main Container', () => {
  describe('it renders a <div> tag', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<MainContainer />);
    });

    it('Renders a <div> and a header', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.find('h1').text()).toMatch('Cipher Chaseß');
    });
  });
});