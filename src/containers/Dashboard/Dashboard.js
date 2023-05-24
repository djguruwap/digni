import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY, SCREEN} from '../../Utils/Metrics';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text>Wellcome to the dashboard</Text>
      <Text style={styles.text}>🚧 This page is under Construction 🚧</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: SCREEN.HEIGHT * 0.2,
  },
  text: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 20,
    color: COLORS.TEXT_BLACK,
  },
});
export default Dashboard;
