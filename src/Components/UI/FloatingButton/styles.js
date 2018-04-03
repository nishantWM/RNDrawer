import {StyleSheet} from 'react-native';
import {COLOR} from "../../../utils/color";

export const styles = StyleSheet.create(
    {
        container:{
            flex:0,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:100,
            margin:10,
            padding:5,
            position:'absolute',
            bottom:50,
            right:30
        },
        controls:{
            borderRadius:100,
            padding:15,
            elevation:3,
            margin:3
        }
    }
);