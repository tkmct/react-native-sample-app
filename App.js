import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomTable from './CustomTable';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomTable />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
