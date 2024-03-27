import React from 'react';
import { shallow } from 'enzyme';
import { FlatList } from 'react-native';
import PosterScreenWithInAppJSON from '../../app/containers/PosterScreenWithInAppJSON';

describe('Test PosterScreenWithInAppJSON', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<PosterScreenWithInAppJSON />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders FlatList component', () => {
        const wrapper = shallow(<PosterScreenWithInAppJSON />);
        expect(wrapper.find(FlatList)).toHaveLength(1);
    });

    it('renders TextInput component when enableTextInput state is true', () => {
        const wrapper = shallow(<PosterScreenWithInAppJSON />);
        jest.spyOn(React, 'useState').mockReturnValueOnce([true, jest.fn()]);
        expect(wrapper.find('TextInput').exists()).toBe(false);
        expect(wrapper).toMatchSnapshot();
    });
});
