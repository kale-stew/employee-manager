import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
    onRowPress() {
        Actions.employeeEdit({ employee: this.props.employee });
    }

    render() {
        const { name } = this.props.employee;
        return (
            <CardSection>
                <ScrollView>
                    <TouchableWithoutFeedback onPress={this.onRowPress.bind( this )}>
                        <View>
                            <Text style={styles.titleStyle}>{name}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </CardSection>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ListItem;