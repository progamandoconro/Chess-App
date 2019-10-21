import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Linking,
} from 'react-native';
import Constants from 'expo-constants';

function Separator() {
  return <View style={styles.separator} />;
}


export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
    
      <View >
      <Text style={styles.title,{fontWeight: "bold",textAlign: "center"}}>
        PROGRAMMING EXAMPLES:
        </Text>
        <Text style={styles.title}>
        ESP32 Server Alarm
        </Text>
        <Button
          title= "Python Code"
          color= "#3b3c8b"
          onPress={() => Linking.openURL('https://github.com/progamandoconro/ESP32-WROOM')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          Machine Learning Predictions
        </Text>
        <Button
          title= "R code"
          color="#087af7"
          onPress={() => Linking.openURL('https://github.com/progamandoconro/Titanic-survivors')}
        />

      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          Random Kanji Generator
        </Text>
        <Button
          title="Golang code"
          color='#02d7fd'
          onPress={() => Linking.openURL('https://github.com/progamandoconro/Kanji-con-Ro')}
        />
        
      </View>
     
      <View></View>
      <View></View><View></View>
      <Separator />
      <View></View><View></View>
      <View></View><View></View>
      <View>
        <Text style={styles.title,{fontWeight: "bold", textAlign: "center"}}>
          Visit me on Facebook and Instagram !
        </Text>
        <Separator />
        <View style={{ width: "40%", alignItems:"center", marginLeft:90 }}>
          
          <Button 
            title="Facebook"
            
            onPress={() => Linking.openURL('https://www.facebook.com/programaconro/')}
          />
          </View>
          <View style={{ width: "40%", alignItems:"center", marginLeft:90 }}>
          <Separator /> 
          <Button
            title="Instagram"
            color="#f194ff"

            onPress={() => Linking.openURL('https://www.instagram.com/programaconro/')}
          />
        </View>
      </View>
      <Separator />
      <Separator />

      <View >
 
 <Text  onPress={ ()=> Linking.openURL('https://github.com/progamandoconro/ReactNativeApps') } >
   
   Also, please check the React Native code used to make this App <Text style={styles.TextStyle} > here. </Text>  </Text>

</View>
    <Separator />
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  TextStyle: {
 
    color: 'blue',
    textDecorationLine: 'underline'
 
  }
});
