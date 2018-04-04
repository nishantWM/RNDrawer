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

class FloatingButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false
        }
    }

    icon_size: 0;
    child_icon_size: 0;

    render() {
        if (this.props.size === 'small') {
            this.icon_size = 15;
            this.child_icon_size = 11;
        } else if (this.props.size === 'normal') {
            this.icon_size = 25;
            this.child_icon_size = 15;
        } else {
            this.icon_size = 35;
            this.child_icon_size = 25;
        }
        return (
            <View style={[styles.container,]}>
                {this.state.expand &&
                <TouchableOpacity style={[styles.controls, {backgroundColor: this.props.color}]}
                                  activeOpacity={0.5}
                                  onPress={this.props.onPress}>
                    <Icon name={'activity'}
                          size={this.child_icon_size}/>
                </TouchableOpacity>
                }
                <TouchableOpacity style={[styles.controls, {backgroundColor: this.props.color}]}
                                  activeOpacity={0.5}
                                  onPress={() => {
                                      this.setState((previousState, props) => ({
                                          expand: !previousState.expand
                                      }));
                                  }}>
                    <Icon name={this.props.icon_name}
                          size={this.icon_size}/>
                </TouchableOpacity>
            </View>
        );
    };
}

FloatingButton.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    icon_name: PropTypes.string.isRequired,
    onPress: PropTypes.func
};

FloatingButton.defaultProps = {
    color: COLOR.WHITE,
    size: 'normal'
};

export default FloatingButton;