import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLandscape: {
    backgroundColor: '#000',
  },
  box: {
    backgroundColor: 'red',
    height: 100,
  },
});

const screen = Dimensions.get('screen');

const Demodimension = () => {
  const isLandscape = screen.width > screen.height;
  return (
    <View style={[styles.container, isLandscape && styles.containerLandscape]}>
      <View style={[styles.box, {width: screen.width / 2}]} />
    </View>
  );
};
export default Demodimension;
