import React from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';


export default function LinksScreen() {
  return (
    <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <Text style={{color: 'blue'}}
          onPress={() => Linking.openURL('http://google.com')}>
          Google
          </Text>
          </TouchableOpacity>
        </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Developer CV', 


  };
 


  function handleLearnMorePress() {
    WebBrowser.openBrowserAsync(
      'https://github.com/progamandoconro'
    );
  }
  
  function handleHelpPress() {
    WebBrowser.openBrowserAsync(
      'https://programandoconro.wordpress.com'
    );
  }





const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
