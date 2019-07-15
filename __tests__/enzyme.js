import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

configure({ adapter: new Adapter() });

import MainContainer from '../src/containers/MainContainer';
import GameContainer from '../src/containers/GameContainer';
import Race from '../src/components/Race.jsx';


describe('React unit test', () => {

  describe('Unit test for main container', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(<MainContainer />);
    });

    it('Renders a <div> and a h1 with the text Cipher Chase', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.find('h1').text()).toMatch('Cipher Chase');
    });
  });

  describe('Unit test for Race.jsx', () => {
    let wrapper;
    const props = {
      playerName: "P1",
    }
    beforeAll(() => {
      wrapper = mount(<Race {...props} />);
    });

    it('Race.jsx should render a label with "P1"', () => {
      expect(wrapper.exists('h4')).toBeTruthy();
      expect(wrapper.find('h4').text()).toMatch('P1');
    });

    it('Race.jsx should render two divs', () => {
      expect(wrapper.find('div')).toHaveLength(2);
    });

    it('Race.jsx should render a spaceship icon', () => {
      expect(wrapper.exists('i.fa-rocket')).toBeTruthy();
      expect(wrapper.find('i')).toHaveLength(1);
    });

  })

});


