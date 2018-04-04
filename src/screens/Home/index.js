import React, {Component} from 'react';
import {
    Text,
    View,
    Alert,
    Animated
} from 'react-native';
import FloatingButton from '../../Components/UI/FloatingButton';

import {styles} from "./styles";

export default class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Home</Text>
                <FloatingButton color={'#FFA07A'}
                                icon_name={'user'}
                                size={'normal'}
                                onPress={() => Alert.alert('Button Pressed')}
                />
            </View>
        );
    }
}