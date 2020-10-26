import React, {Component} from 'react';
import {connect} from 'react-redux';

import {View, Text, Button} from 'react-native';
import {getTestAction} from '../actions';

const HomeScreen = (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Text>{props.testText}</Text>
      <Button onPress={props.getTestAction} title="Press Me!" color="#841584" />
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getTestAction: () => dispatch(getTestAction()),
});

const mapStateToProps = (state) => ({
  testText: state.home.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
