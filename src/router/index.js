import React, {Component} from 'react';
import {
    DrawerNavigator,
    StackNavigator,
    TabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Home from '../screens/Home';
import MyNotifications from '../screens/Notifications/MyNotifications';
import OtherNotifications from '../screens/Notifications/OtherNotifications';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';

import {styles} from "./styles";

const HomeStack = StackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: ({navigation}) => ({
                title: 'Home',
                headerStyle: {
                    elevation: 0
                },
                headerLeft: <Icon name={'menu'}
                                  size={25}
                                  style={{paddingLeft: 10}}
                                  onPress={() => navigation.navigate('DrawerOpen')}
                />,
                headerRight: <Icon name={'arrow-forward'}
                                   size={25}
                                   style={{paddingRight: 10}}
                                   onPress={() => navigation.navigate('Settings')}/>

            })
        }
    }
);
const SettingsStack = StackNavigator(
    {
        Settings: {
            screen: Settings,
            navigationOptions: ({navigation}) => ({
                title: 'Settings',
                headerStyle: {
                    elevation: 0
                },
                headerLeft: <Icon name={'menu'}
                                  size={25}
                                  style={{paddingLeft: 10}}
                                  onPress={() => navigation.navigate('DrawerOpen')}/>,
                headerRight: <Icon name={'arrow-forward'}
                                   size={25}
                                   style={{paddingRight: 10}}
                                   onPress={() => navigation.navigate('Profile')}/>
            })
        }
    }
);

const ProfileStack = StackNavigator(
    {
        Profile: {
            screen: Profile,
            navigationOptions: ({navigation}) => ({
                title: 'Profile',
                headerStyle: {
                    elevation: 0
                },
                headerLeft: <Icon name={'menu'}
                                  size={25}
                                  style={{paddingLeft: 10}}
                                  onPress={() => navigation.navigate('DrawerOpen')}/>,
                headerRight: <Icon name={'arrow-forward'}
                                   size={25}
                                   style={{paddingRight: 10}}
                                   onPress={() => navigation.navigate('Notifications')}/>
            })
        }
    }
);
const NotificationsTab = TabNavigator(
    {
        MyNotifications: {
            screen: MyNotifications,
            navigationOptions:{
                title: 'My Notifications',
            }

        },
        OtherNotifications:{
            screen: OtherNotifications,
            navigationOptions:{
                title: 'Other Notifications',
            }
        }
    },{
        initialRouteName:'MyNotifications',
        tabBarPosition:'bottom'
    }
);
const NotificationsStack = StackNavigator(
    {
        Notifications: {
            screen: NotificationsTab,
            navigationOptions: ({navigation}) => ({
                title: 'Notifications',
                headerStyle: {
                    elevation: 0
                },
                headerLeft: <Icon name={'menu'}
                                  size={25}
                                  style={{paddingLeft: 10}}
                                  onPress={() => navigation.navigate('DrawerOpen')}/>,
            })
        }
    }
);


export default DrawerNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                drawerIcon: <Icon name={"home"}
                                  size={25}
                                  style={styles.drawer_icon}/>
            }
        },
        Settings: {
            screen: SettingsStack,
            navigationOptions: {
                drawerIcon: <Icon name={"settings"}
                                  size={25}
                                  style={styles.drawer_icon}/>
            }
        },
        Profile: {
            screen: ProfileStack,
            navigationOptions: {
                drawerIcon: <Icon name={"person"}
                                  size={25}
                                  style={styles.drawer_icon}/>
            }
        },
        Notifications: {
            screen: NotificationsStack,
            navigationOptions: {
                drawerLabel:'Notifications',
                drawerIcon: <Icon name={"notifications"}
                                  size={25}
                                  style={styles.drawer_icon}/>
            }
        }
    },
    {
        drawerWidth: 250,
        // order:['Home','Profile','Notifications','Settings'],
    }
);