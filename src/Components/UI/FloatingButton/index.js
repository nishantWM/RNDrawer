import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    TouchableOpacity,
    View,
    Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {COLOR} from '../../../utils/color';
import {styles} from "./styles";

export default class FloatingButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false
        }
    }

    static propTypes = {
        color: PropTypes.string,
        size: PropTypes.oneOf(['small', 'normal', 'large']),
        icon_name: PropTypes.string.isRequired,
        onPress: PropTypes.func
    };

    static defaultProps = {
        color: COLOR.WHITE,
        size: 'normal'
    };

    render = () => {
        const {color, size, icon_name, onPress} = this.props;
        let icon_size = 0, child_icon_size = 0;
        if (size === 'small') {
            icon_size = 15;
            child_icon_size = 11;
        } else if (size === 'normal') {
            icon_size = 25;
            child_icon_size = 15;
        } else {
            icon_size = 35;
            child_icon_size = 25;
        }
        return (
            <View style={styles.container}>
                {this.state.expand &&
                <TouchableOpacity style={[styles.controls, {backgroundColor: color}]}
                                  activeOpacity={0.5}
                                  onPress={onPress}>
                    <Icon name={'activity'}
                          size={child_icon_size}/>
                </TouchableOpacity>
                }
                <TouchableOpacity style={[styles.controls, {backgroundColor: color}]}
                                  activeOpacity={0.5}
                                  onPress={() => {
                                      this.setState((previousState, props) => ({
                                          expand: !previousState.expand
                                      }));
                                  }}>
                    <Icon name={icon_name}
                          size={icon_size}/>
                </TouchableOpacity>
            </View>
        );
    };
}