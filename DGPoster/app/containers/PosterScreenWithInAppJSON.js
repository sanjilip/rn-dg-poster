import React, { useEffect, useState } from 'react';
import {
    FlatList,
    View,
    Text,
    Image,
    Dimensions,
    TextInput,
    SafeAreaView
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
    HEADER_BACKGROUND,
    IMAGES,
    INITIAL_PAGE,
    LEFT_ICON,
    MISSING_IMAGE,
    POSTER,
    POSTER_DATA,
    POSTER_HEADER_TITLE,
    RIGHT_ICON
} from '../utilities/constants';
import { updatePosterData } from '../reduxToolkit/slices/posterDataSlice';
import CustomHeader from '../components/CustomHeader';
import { posterScreenStyle as style } from './style';

const WINDOW_WIDTH = Dimensions.get('window').width;
const COLUMN_WIDTH = WINDOW_WIDTH / 3;

const PosterScreenWithInAppJSON = ({ navigation }) => {
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
    const [data, setData] = useState(POSTER[0]);
    const [searchQuery, setSearchQuery] = useState('');
    const [enableTextInput, setEnableTextInput] = useState(false);

    const posterData = useSelector((state) => state.posterData.data);

    useEffect(() => {
        // example of how useDispatch used for dispatching actions to manipulate redux state
        // we can use POSTER_DATA from constants directly but just to show how redux actions work, updating redux state here
        dispatch(updatePosterData(POSTER_DATA));
    }, []);

    const fetchNextPages = () => {
        const nextPage = POSTER[currentPage];
        if (!searchQuery && nextPage) {
            setData([...data, ...nextPage]);
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentPage(INITIAL_PAGE);
        }
    };

    const searchFilter = (text) => {
        /*
            We can use POSTER_DATA from constants directly but just to show how redux data can be used from useSelector
            Using redux state instead of directly importing it from constants here
            NOTE - all data at once is only being used for searching throughout whole data
            Lazy loading concept is handled in fetchNextPage func
            for now handling search at client end only but it should be handled at server end for smooth user experience
        */

        setSearchQuery(text);
        if (text) {
            const filteredData = posterData.filter((item) =>
                item.name.toLowerCase().includes(text.toLowerCase())
            );
            setData(filteredData);
        } else {
            setData(POSTER[0]);
        }
    };

    const renderItem = ({ item }) => {
        const image = IMAGES[item['poster-image']] || MISSING_IMAGE;

        return (
            <View style={[style.item, { width: COLUMN_WIDTH }]}>
                <Image source={image} style={style.image} />
                <Text style={style.text}>{item.name}</Text>
            </View>
        );
    };

    const onSearchIconTapped = () => {
        setEnableTextInput(!enableTextInput);
        setSearchQuery('');
        setData(POSTER[0]);
    };

    return (
        <SafeAreaView style={style.container}>
            <CustomHeader
                title={POSTER_HEADER_TITLE}
                leftIcon={LEFT_ICON}
                rightIcon={RIGHT_ICON}
                backgroundImage={HEADER_BACKGROUND}
                leftActionCalled={() => navigation?.goBack()}
                rightActionCalled={onSearchIconTapped}
            />

            {enableTextInput && (
                <TextInput
                    style={style.searchInput}
                    placeholder="Begin Your Search..."
                    value={searchQuery}
                    onChangeText={searchFilter}
                />
            )}
            <FlatList
                style={style.flatList}
                data={data}
                renderItem={renderItem}
                onEndReached={fetchNextPages}
                onEndReachedThreshold={0.8}
                keyExtractor={(_, index) => index.toString()}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={style.contentContainer}
            />
        </SafeAreaView>
    );
};

export default PosterScreenWithInAppJSON;
