import React from 'react';
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';

import HomeScreen from '../../app/containers/HomeScreen';

describe('Test HomeScreen component', () => {
    it('navigates to "Poster" screen when button is pressed', () => {
        const mockNavigate = jest.fn();
        const navigation = { navigate: mockNavigate };
        const wrapper = shallow(<HomeScreen navigation={navigation} />);
        const button = wrapper.find(TouchableOpacity);
        button.simulate('press');

        expect(mockNavigate).toHaveBeenCalledWith('Poster');
    });
});
