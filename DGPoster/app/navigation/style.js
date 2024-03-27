import { StyleSheet } from 'react-native';

export const appContainerStyle = StyleSheet.create({
    headerStyle: {
        backgroundColor: 'black',
        flex: 1,
        alignContent: 'space-between',
        justifyContent: 'space-between'
    },
    text: {
        // flex: 0.8,
        alignSelf: 'flex-start',
        backgroundColor: 'red',
        fontSize: 22,
        fontWeight: '300',
        color: '#FFFFFF',
        fontFamily: 'TitilliumWeb'
    },
    searchIconContainer: { flex: 1 },
    searchIcon: {
        flex: 1,
        alignSelf: 'flex-end',
        height: 25,
        width: 25
    }
});
