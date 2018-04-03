import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import {styles} from "./styles";
import FloatingButton from '../../../Components/UI/FloatingButton';

export default class MyNotifications extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>My Notifications</Text>
                <FloatingButton icon_name={'alert-triangle'}
                                color={'lightcoral'}/>
            </View>
        );
    }
}