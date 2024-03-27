import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../containers/HomeScreen';
import PosterScreen from '../containers/PosterScreen';
import PosterScreenWithInAppJSON from '../containers/PosterScreenWithInAppJSON';

const Stack = createNativeStackNavigator();

const AppContainer = () => {
    return (
        <>
            <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerShown: false,
                        headerBackTitleVisible: false
                    }}>
                    <Stack.Screen name={'Home'} component={HomeScreen} />
                    <Stack.Screen name={'Poster'} component={PosterScreen} />
                    <Stack.Screen
                        name={'PosterInAppJSON'}
                        component={PosterScreenWithInAppJSON}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default AppContainer;
