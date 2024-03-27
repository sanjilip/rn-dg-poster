import { StyleSheet } from 'react-native';

export const homeScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    button: {
        borderRadius: 10,
        backgroundColor: 'purple',
        height: 70,
        marginHorizontal: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        color: 'white'
    }
});

export const posterScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: { marginBottom: 20 },
    image: {
        width: '96%',
        height: 190,
        marginBottom: 10,
        resizeMode: 'cover'
    },
    text: { color: 'white' },
    searchInput: {
        height: 40,
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 5,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white'
    },
    flatList: {
        flex: 1,
        backgroundColor: 'black',
        marginHorizontal: 5
    },
    noRecordText: {
        margin: 20,
        color: 'white',
        alignSelf: 'center',
        fontSize: 18
    }
});
