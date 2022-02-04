import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function Radiobutton({ options, onPress, circleColor, initialValue }) {
    const [value, setValue] = useState(initialValue);

    const handlePress = (selected) => {
        setValue(selected);
        onPress(selected);
    }

    return (
        <>
            {
                options.map((option) => (
                    <View key={option.value} style={styles.buttonContainer}>
                        <Text style={styles.label}>{option.label}</Text>
                        <Pressable style={styles.circle} onPress={() => handlePress(option.value)}>
                            {value === option.value && <View style={[styles.checkedCircle, circleColor]} />}
                        </Pressable>
                    </View>
                ))
            }
        </>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: 10,
    },
    label: {
        marginRight: 30,
    },
    circle: {
        height: 28,
        width: 28,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: '#000',
    },

});
