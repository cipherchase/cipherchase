import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Race from '../src/components/Race.jsx';

configure({ adapter: new Adapter() });


describe('React Unit Tests', () => {
  let wrapper;

  describe('Race React File', () => {
    it('test', () => {
      expect(true.toEqual(true));
    });
  })
});