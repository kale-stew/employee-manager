// can be used to wrap data for display purposes
// looks great with CardSection wrap

import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        // rounded corners
        borderColor: '#ddd',
        borderBottomWidth: 0,
        // if there is no width === no visibility 
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        }, // appears to only have shadow on the bottom
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        // borders against the screen
        marginTop: 10
    }
};

export { Card };