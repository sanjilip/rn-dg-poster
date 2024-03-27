import { StyleSheet } from 'react-native';

export const customHeaderStyle = StyleSheet.create({
    headerContainer: {
        height: 40,
        backgroundColor: 'black',
        marginBottom: 10
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },

    rightIcon: {
        flex: 1,
        alignItems: 'flex-end',
        width: 23,
        height: 23
    },
    leftIcon: {
        width: 18,
        height: 18,
        marginRight: 15
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff'
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.5
    }
});
