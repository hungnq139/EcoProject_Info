// https://raw.githubusercontent.com/benevbright/react-navigation-sample/master/src/LoginScreen.js

import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import ABC from './info2.js'

const Info = ({navigation}) => {
  useEffect(() => {
    console.log('moe info');
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ABC navigation = {navigation}/>
    </View>
  );
};

export default Info;

global.InfoScreen = Info;
