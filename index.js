// https://raw.githubusercontent.com/benevbright/react-navigation-sample/master/src/LoginScreen.js

import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const Info = ({navigation}) => {
  useEffect(() => {
    console.log('moe info');
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail')}
        style={{alignSelf: 'center'}}>
        <Text style={{fontSize: 36}}>Info screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Info;

global.InfoScreen = Info;
