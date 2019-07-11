import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

import MainContainer from '../src/containers/MainContainer';


describe('React unit tests', () => {
  describe('Race.js Test', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<MainContainer />);
    });

    it('Renders a <div>', () => {
      expect(wrapper.type()).toEqual('div');
    });
  });
});