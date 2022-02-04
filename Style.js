import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginVertical: 20,
        marginHorizontal: 20,
        paddingHorizontal: 16,
    },
    customDropShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 36,
        color: '#2196F3',
        alignSelf: 'center',
        marginVertical: 30,
        textDecorationLine: 'underline',
    },
    label: {
        fontWeight: 'bold',
        marginVertical: 5,
    },
    textInput: {
        borderBottomColor: '#EDEDED',
        borderBottomWidth: 1,
    },
    radio: {
        color: 'blue',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    result: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
});

export default style;