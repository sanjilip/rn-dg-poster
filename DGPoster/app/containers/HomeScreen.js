import { Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';

import { homeScreenStyle as style } from './style';
import { fetchPosterData } from '../reduxToolkit/api/apiClient/fetchPosterData';
import { resetPosterData } from '../reduxToolkit/slices/posterDataSlice';
import { API_KEYS } from '../reduxToolkit/api/apiClient/utility/apiKeys';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const onButtonPressed = () => {
        dispatch(resetPosterData());
        dispatch(fetchPosterData(API_KEYS.posterData, 1));
        navigation?.navigate?.('Poster');
    };

    return (
        <SafeAreaView style={style.container}>
            <TouchableOpacity style={style.button} onPress={onButtonPressed}>
                <Text style={style.text}>Explore Posters</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default HomeScreen;
