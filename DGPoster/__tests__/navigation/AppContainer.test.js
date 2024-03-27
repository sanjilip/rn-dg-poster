import React from 'react';
import { shallow } from 'enzyme';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppContainer from '../../app/navigation/AppContainer';

// Mocking screen components
jest.mock('../containers/HomeScreen.test', () => 'HomeScreen');
jest.mock('../containers/PosterScreen.test', () => 'PosterScreen');
jest.mock(
    '../containers/PosterScreenWithInAppJSON.test',
    () => 'PosterScreenWithInAppJSON'
);

describe('Test AppContainer', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AppContainer />);
    });

    it('renders StatusBar component', () => {
        expect(wrapper.find(StatusBar)).toHaveLength(1);
    });

    it('renders NavigationContainer', () => {
        expect(wrapper.find(NavigationContainer)).toHaveLength(1);
    });

    it('renders HomeScreen component', () => {
        expect(wrapper.find('Screen[name="Home"]')).toHaveLength(1);
    });

    it('renders PosterScreen component', () => {
        expect(wrapper.find('Screen[name="Poster"]')).toHaveLength(1);
    });

    it('renders PosterScreenWithInAppJSON component', () => {
        expect(wrapper.find('Screen[name="PosterInAppJSON"]')).toHaveLength(1);
    });
});
