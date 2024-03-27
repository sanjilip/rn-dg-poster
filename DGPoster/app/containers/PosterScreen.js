import React, { useEffect, useState } from 'react';
import {
    FlatList,
    View,
    Text,
    Image,
    Dimensions,
    TextInput,
    SafeAreaView,
    BackHandler,
    useColorScheme
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
    HARDWARE_BACK_PRESS,
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
import CustomHeader from '../components/CustomHeader';
import { posterScreenStyle as style } from './style';
import { API_KEYS } from '../reduxToolkit/api/apiClient/utility/apiKeys';
import { fetchPosterData } from '../reduxToolkit/api/apiClient/fetchPosterData';
import { resetPosterData } from '../reduxToolkit/slices/posterDataSlice';

const WINDOW_WIDTH = Dimensions.get('window').width;
const COLUMN_WIDTH = WINDOW_WIDTH / 3;

const PosterScreen = ({ navigation }) => {
    const COLOR_SCHEME = useColorScheme();
    const DARK_MODE = COLOR_SCHEME === 'dark';

    const dispatch = useDispatch();

    const { content, pageNumber } = useSelector(
        (state) => state.posterData ?? {}
    );

    const INITIAL_DATA = (pageNumber === INITIAL_PAGE && content) || POSTER[0];

    const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
    const [data, setData] = useState(INITIAL_DATA);
    const [searchQuery, setSearchQuery] = useState('');
    const [enableTextInput, setEnableTextInput] = useState(false);

    useEffect(() => {
        const backAction = () => {
            navigateBack();
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            HARDWARE_BACK_PRESS,
            backAction
        );

        return () => backHandler.remove();
    }, []);

    useEffect(() => {
        if (content && pageNumber < 4) {
            setData(content);
        }
    }, [content]);

    const fetchNextPages = () => {
        if (!searchQuery && currentPage < 3) {
            const nextPage = currentPage + 1;
            dispatch(fetchPosterData(API_KEYS.posterData, nextPage));
            setCurrentPage(nextPage);
        }
    };

    const searchFilter = (text) => {
        /*  NOTE -  POSTER_DATA from constants is only being used for searching throughout whole data
            Lazy loading concept is handled in fetchNextPages func
            for now handling search at client end only but it should be handled at server end for smooth user experience */

        setSearchQuery(text);
        if (text) {
            const filteredData = POSTER_DATA.filter((item) =>
                item?.name.toLowerCase().includes(text.toLowerCase())
            );
            setData(filteredData);
        } else {
            dispatch(fetchPosterData(API_KEYS.posterData, INITIAL_PAGE));
            setCurrentPage(INITIAL_PAGE);
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

    const renderFlatlist = () => {
        return (
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
        );
    };

    const renderSearchInput = () => {
        return (
            enableTextInput && (
                <TextInput
                    style={[style.searchInput, DARK_MODE && { color: 'black' }]}
                    placeholder="Begin Your Search..."
                    placeholderTextColor={DARK_MODE && 'gray'}
                    value={searchQuery}
                    onChangeText={searchFilter}
                />
            )
        );
    };

    const noSearchDataFound = () => {
        const show = data.length === 0 && enableTextInput && searchQuery;
        return (
            show && (
                <Text style={style.noRecordText}>
                    Sorry! No Matching Record Found.
                </Text>
            )
        );
    };

    const navigateBack = () => {
        dispatch(resetPosterData());
        navigation?.goBack();
    };

    const onSearchIconTapped = () => {
        searchQuery &&
            dispatch(fetchPosterData(API_KEYS.posterData, INITIAL_PAGE));
        setSearchQuery('');
        setCurrentPage(INITIAL_PAGE);
        setEnableTextInput(!enableTextInput);
    };

    return (
        <SafeAreaView style={style.container}>
            <CustomHeader
                title={POSTER_HEADER_TITLE}
                leftIcon={LEFT_ICON}
                rightIcon={RIGHT_ICON}
                backgroundImage={HEADER_BACKGROUND}
                leftActionCalled={navigateBack}
                rightActionCalled={onSearchIconTapped}
            />
            {renderSearchInput()}
            {noSearchDataFound()}
            {renderFlatlist()}
        </SafeAreaView>
    );
};

export default PosterScreen;
