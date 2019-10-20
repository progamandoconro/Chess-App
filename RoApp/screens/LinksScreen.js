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
  Button,
} from 'react-native';

export default function LinksScreen() {
  return (
    <View style={styles.helpContainer}>

        <Button
          title="Blog-Portafolio Wordpress"
          onPress={() => Linking.openURL('http://programandoconro.wordpress.com')}
        />
        <View><Text></Text></View>
        <Button
          title="Stackoverflow"
          onPress={() => Linking.openURL('https://stackoverflow.com/users/5948056/rodrigo-díaz-lupanow')}
        />
         <View><Text></Text></View>
          <Button
          title="Linkedin"
          onPress={() => Linking.openURL('https://www.linkedin.com/in/rodrigo-díaz-lupanow-3ba1bb29/')}
        />
        <View><Text></Text></View>
        <Image 
        source={{uri: 'https://programandoconro.shinyapps.io/rainforest_climate_change/_w_522783c2/global.png'}} 
        style={{width: 800, height: 800}} 
        />
          
        </View>     
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

LinksScreen.navigationOptions = {
  title: 'Developer CV', 
  }; 