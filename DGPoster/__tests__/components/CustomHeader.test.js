import React from 'react';
import { shallow } from 'enzyme';

import CustomHeader from '../../app/components/CustomHeader';

describe('Test CustomHeader', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CustomHeader />);
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
