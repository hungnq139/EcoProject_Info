import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native';

const info2 = ({navigation}) => {
    return (
        <TouchableOpacity
        onPress={() => navigation.navigate('Detail')}
        style={{alignSelf: 'center'}}>
        <Text style={{fontSize: 36}}>Info screen</Text>
      </TouchableOpacity>
    )
}

export default info2
