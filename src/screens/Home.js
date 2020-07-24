import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}> Home </Text>
        <Button
          style={styles.button}
          title="Maps"
          onPress={() => this.props.navigation.navigate('Maps')}
        />
        <Button
          style={styles.button}
          title="Realtime"
          onPress={() => this.props.navigation.navigate('Realtime')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
  },
});

export default Home;
