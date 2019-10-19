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
          <Text style={{fontSize: 40, color: 'blue'}}
          onPress={() => Linking.openURL('http://programandoconro.wordpress.com')}>
          Blog and Portafolio
          </Text>
          </TouchableOpacity>
        </View>
        
  );
}

LinksScreen.navigationOptions = {
  title: 'Developer CV', 
  }; 
  
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
